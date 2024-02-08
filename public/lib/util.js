import { global } from "./global.js";
import { settings } from "./settings.js";
const util = {
    submitToLocalStorage: name => {
        localStorage.setItem(name + 'Value', document.getElementById(name).value);
        localStorage.setItem(name + 'Checked', document.getElementById(name).checked);
        return false;
    },
    retrieveFromLocalStorage: name => {
        document.getElementById(name).value = localStorage.getItem(name + 'Value');
        document.getElementById(name).checked = localStorage.getItem(name + 'Checked') === 'true';
        return false;
    },
    handleLargeNumber: (a, cullZeroes = false) => {
        if (cullZeroes && a == 0) {
            return '';
        }
        if (a < Math.pow(10, 3)) {
            return '' + a.toFixed(0);
        }
        if (a < Math.pow(10, 6)) {
            return (a / Math.pow(10, 3)).toFixed(2) + "k";
        }
        if (a < Math.pow(10, 9)) {
            return (a / Math.pow(10, 6)).toFixed(2) + "m";
        }
        if (a < Math.pow(10, 12)) {
            return (a / Math.pow(10, 9)).toFixed(2) + "b";
        }
        if (a < Math.pow(10, 15)) {
            return (a / Math.pow(10, 12)).toFixed(2) + "t";
        }
        return (a / Math.pow(10, 15)).toFixed(2) + "q";
    },
    timeForHumans: x => {
        // ought to be in seconds
        let seconds = x % 60;
        x /= 60;
        x = Math.floor(x);
        let minutes = x % 60;
        x /= 60;
        x = Math.floor(x);
        let hours = x % 24;
        x /= 24;
        x = Math.floor(x);
        let days = x;
        let y = '';

        function weh(z, text) {
            if (z) {
                y = y + ((y === '') ? '' : ', ') + z + ' ' + text + ((z > 1) ? 's' : '');
            }
        }
        weh(days, 'day');
        weh(hours, 'hour');
        weh(minutes, 'minute');
        weh(seconds, 'second');
        if (y === '') {
            y = 'less than a second';
        }
        return y;
    },
    addArticle: string => {
        return (/[aeiouAEIOU]/.test(string[0])) ? 'an ' + string : 'a ' + string;
    },
    formatLargeNumber: x => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    pullJSON: fileName => {
        return new Promise((resolve, reject) => {
            const url = `${location.protocol}//${window.serverAdd}/lib/json/${fileName}.json`;
            console.log("Loading JSON from " + url);
            fetch(url).then(response => response.json()).then(json => {
                console.log("JSON load from " + url + " complete");
                resolve(json);
            }).catch(error => {
                console.log("JSON load from " + url + " complete");
                reject(error);
            });
        });
    },
    lerp: (a, b, x, syncWithFps = false) => {
        if (syncWithFps) {
            if (global.fps < 20) global.fps = 20;
            x /= global.fps / 120;
        }
        return a + x * (b - a);
    },
    lerpAngle: (is, to, amount, syncWithFps) => {
        var normal = {
            x: Math.cos(is),
            y: Math.sin(is)
        };
        var normal2 = {
            x: Math.cos(to),
            y: Math.sin(to)
        };
        var res = {
            x: util.lerp(normal.x, normal2.x, amount, syncWithFps),
            y: util.lerp(normal.y, normal2.y, amount, syncWithFps)
        };
        return Math.atan2(res.y, res.x);
    },
    getRatio: () => Math.max(global.screenWidth, 16 * global.screenHeight / 9) / global.player.renderv,
    getScreenRatio: () => Math.max(global.screenWidth, 16 * global.screenHeight / 9) / global.screenSize,
    rewardManager: () => {
        constructor: () => {
            // Special keys for storage to help with identification
            this.storageKeyAchievement = "ACH3:";
            this.storageKeyStat = "STT3:";

            // An empty array containing values for statistics. They get loaded properly later
            this.statistics = [...Array(11)].fill(0); // [player kills, deaths, boss kills, polygon kills, best score, best time, total score, total time] crasher kills, basic deaths, director upgrades

            // Load statistics and achievements, then update the visual menu dom display
            fetch(window.quickurl + "json/achievements.json"+"?v="+Date.now()).then(r => r.json()).then(json => {
                this.achievements = json;
                for (let name in this.achievements) this.achievements[name].unlocked = false;
                this.loadFromLocalStorage();
                this.updateDisplay();
            });
        }

        // Depricated
        initAchievementCheck: () => {

        }

        // If an achievement is incomplete return a formatted precentage of progress of the achievement, or return an empty string if it is complete
        getNamedPrecentage: (stat, goal, type) => {
            let precentage = this.statistics[stat] / goal
            if (precentage >= 1) return "";
            let func = type ? util.formatTime : util.handleLargeNumber;
            return (` [${func(this.statistics[stat] || 0, true)}/${func(goal, true)} ${Math.floor(precentage * 100)}%]`).toUpperCase();
        }

        // Increases (or sets if specified) a statistic by a specific value, and then save it to localstorage
        increaseStatistic: (id, val, set = false) => {
            if (this.statistics[id] == null) throw new TypeError(id + " is not a valid statistic id.");
            if (isNaN(val)) throw new TypeError(val + " is not a valid integer.");
            this.statistics[id] = set ? val : this.statistics[id] + val;
            let current = this.statistics[id]
            localStorage.setItem(this.enc(this.storageKeyStat + `${id}`), btoa(this.statistics[id]));
        }

        // Encode safely into localstorage, as a method of protection against scripters
        enc: (str) => {
            // depricated depricated blh
            return btoa(unescape(encodeURIComponent(str)));
        }

        // Decode from localstorage, as a method of protection against scripters
        dec: (str) => {
            try { // I hate this...
                return decodeURIComponent(escape(atob(str)));
            } catch (error) {
                return ""
            }
        }

        // Convert the achievements array pool to something that is easier to work with
        /*logicify(ach) {
            this.achievements = {};
            for (let instance of ach) //this.achievements[instance[3].replaceAll(" ", "_").toLowerCase().replace(/[^0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_]/gi, "")] = {
                title: instance[0],
                description: instance[1],
                tier: instance[2],
                unlocked: false,
                precentageData: instance[4],
            };
        }*/

        // Get the tier color based the achievements tier, and if its unlocked or not
        getTierColor: (tier) => {
            switch (tier) {
                case false: return "#9F9F9F"; // Locked
                case 1: return "#8abb44";
                case 2: return "#44bbb0";
                case 3: return "#7544bb";
                case 4: return "#bb444f";
                case 5: return "#ffffff";
                default: throw new TypeError(tier + " is not a known tier type!");
            }
        }

        // Load all statistics and achievements from localstorage to share between sessions
        loadFromLocalStorage: () => {
            for (let instance of Object.keys(localStorage).filter(k => this.dec(k).includes(this.storageKeyAchievement))) {
                instance = this.dec(instance).slice(5);
                if (this.achievements[instance] == null) console.warn(instance + " is not a known achievement.");
                else this.achievements[instance].unlocked = true;
            }
            for (let instance of Object.keys(localStorage).filter(k => this.dec(k).includes(this.storageKeyStat))) {
                let id = parseFloat(this.dec(instance).slice(5));
                if (this.statistics[id] == null) console.warn(id + " is not a known statistic.");
                else this.statistics[id] = parseFloat(atob(localStorage.getItem(instance)));
            }
        }

        // Unlock an achievement by its id, and save it to localstorage
        unlockAchievement: (id) => {
            if (!this.achievements) return;
            if (this.achievements[id] == null) throw new TypeError(id + " is not a valid achievement.");
            else if (!this.achievements[id].unlocked) {
                this.achievements[id].unlocked = true;
                // Lol scripters gotta deal with ran int and waste time L bozo
                localStorage.setItem(this.enc(this.storageKeyAchievement + `${id}`), (100 * Math.random).toFixed(0));
                global.sendMessageToClient("Achievement complete: " + this.achievements[id].title, "guiblack");
                if (Object.keys(this.achievements).map(key => this.achievements[key]).filter(a => !a.unlocked).sort((a, b) => a.tier - b.tier).length === 1) this.unlockAchievement("the_king");
            }
        }

        // By the achievement id, see if its unlocked or not
        isAchievementUnlocked: (id) => {
            if (!this.achievements) return false;
            if (this.achievements[id] == null) throw new TypeError(id + " is not a valid achievement.");
            else return this.achievements[id].unlocked
        }

        // Update the dom holder for achievements and statistics
        updateDisplay: (element = document.getElementById("achievementsDisplay"), elementTwo = document.getElementById("achievementsStatsTable")) => {
            element.innerHTML = '';
            let i = 0;

            // Its split up like this so we can sort by tier, but also push unlocked to the top
            let arrayOfAll = Object.keys(this.achievements).map(key => this.achievements[key]);
            let arrayOfUnlocked = arrayOfAll.filter(a => a.unlocked).sort((a, b) => a.tier - b.tier);
            let arrayOfLocked = arrayOfAll.filter(a => !a.unlocked).sort((a, b) => a.tier - b.tier);

            // Visually display the achievements
            for (let instance of [...arrayOfUnlocked, ...arrayOfLocked]) {
                let holder = document.createElement('div');
                let title = document.createElement("h1");
                let description = document.createElement("span");

                // Title and concat precentage of progress
                title.innerText = `${instance.title}${instance.precentageData ? this.getNamedPrecentage(...instance.precentageData) : ""}`;
                description.innerText = instance.description;

                holder.classList.add('achievementsItem');
                holder.classList.add('autoBorder');
                holder.appendChild(title);
                holder.appendChild(description);

                if (instance.unlocked) i++;
                holder.style.backgroundColor = this.getTierColor(instance.unlocked ? instance.tier : false);

                element.appendChild(holder);
            }

            let precentage = Math.floor(i / Object.keys(this.achievements).length * 100)

            document.getElementById("achievementsHeader").innerText += (` ${precentage}% ${precentage === 100 ? "Completed" : ` Complete [${i}/${Object.keys(this.achievements).length}]`}`);

            // Same, but for statistics
            let arr = this.statistics;
            elementTwo.innerHTML = (`<tr> <td><b>Kills</b>: ${arr[0]}</td> <td><b>Deaths</b>: ${arr[1]}</td> </tr> <tr> <td><b>Boss Kills</b>: ${arr[2]}</td> <td><b>Polygon Kills</b>: ${arr[3]}</td> </tr> <tr> <td><b>Best Score</b>: ${util.handleLargeNumber(Math.round(arr[4]))}</td> <td><b>Best Time</b>: ${util.formatTime(Math.round(arr[5]), true)}</td> </tr> <tr> <td><b>Total Score</b>: ${util.handleLargeNumber(Math.round(arr[6]))}</td> <td><b>Total Time</b>: ${util.formatTime(Math.round(arr[7]), true)}</td> </tr> </table>`);

            if (this.achievements.the_king.unlocked) {
                let div = document.createElement("div");
                let link = document.createElement("a");

                div.classList.add("bottomHolder");

                link.style.background = "#2bab2f";
                link.style.width = "100px;";

                link.href = "javascript:void(0)";
                link.onclick = this.openThankYou;

                link.innerText = "Thank you";

                div.appendChild(link);
                document.getElementById("achievementsHeader").appendChild(div);

                document.getElementById("achievementsHolder").style.height = `700px`
            };
        }

        // <3
        openThankYou: () => {
            document.getElementById("achievementsClose").click();
            popup.style.display = "block";
            popupTitle.textContent = "Thank you, King.";
            popupMessage.textContent = "Welcome to the game, welcome to the end of the game.\n\nThe King have completed every challange this game has to offer. The King has won the 4th war. The King would not give up, no matter what was in his way.\nThe King is the Player.\nYou are the player.\nYou have pushed through absolutely everything.\n\nGood Job, King.\n\nFor real though, thanks for playing this much. We hope you enjoyed and loved this game as much as we do.\n-- From Jekyll, and the rest of the dev team";
        }
    },
    Smoothbar: (value, speed, sharpness = 3, lerpValue = .025) => {
        let time = Date.now();
        let display = value;
        let oldvalue = value;
        return {
            set: val => {
                if (value !== val) {
                    oldvalue = display;
                    value = val;
                    time = Date.now();
                }
            },
            get: (round = false) => {
                display = util.lerp(display, value, lerpValue);
                if (Math.abs(value - display) < 0.1 && round) display = value;
                return display;
            },
        };
    },
    isInView: (x, y, r, mid = false) => {
        let ratio = util.getRatio();
        r += settings.graphical.borderChunk;
        if (mid) {
            ratio *= 2;
            return x > -global.screenWidth / ratio - r && x < global.screenWidth / ratio + r && y > -global.screenHeight / ratio - r && y < global.screenHeight / ratio + r;
        }
        return x > -r && x < global.screenWidth / ratio + r && y > -r && y < global.screenHeight / ratio + r;
    },
    getEntityImageFromMockup: (index, color) => {
        let firstIndex = parseInt(index.split("-")[0]),
            mainMockup = global.mockups[firstIndex],
            guns = [],
            turrets = [],
            name = "",
            upgradeTooltip = "",
            rerootUpgradeTree = [],
            allRoots = [],
            trueColor = mainMockup.color.split(' ');
        if ((trueColor[0] == '-1' || trueColor[0] == 'mirror') && color) trueColor[0] = color.split(' ')[0];
        let finalColor = trueColor.join(' ');
        
        for (let i of index.split("-")) {
            let mockup = global.mockups[parseInt(i)];
            guns.push(...mockup.guns);
            turrets.push(...mockup.turrets);
            name += mockup.name.length > 0 ? "-" + mockup.name : "";
            upgradeTooltip += mockup.upgradeTooltip ? "\n" + mockup.upgradeTooltip : "";
            if (mockup.rerootUpgradeTree) allRoots.push(...mockup.rerootUpgradeTree.split("\\/"));
        }
        for (let root of allRoots) {
            if (!rerootUpgradeTree.includes(root))
                rerootUpgradeTree.push(root);
        }
        turrets.sort(a => a.layer);
        return {
            time: 0,
            index: index,
            x: mainMockup.x,
            y: mainMockup.y,
            vx: 0,
            vy: 0,
            size: mainMockup.size,
            realSize: mainMockup.realSize,
            color: finalColor,
            borderless: mainMockup.borderless,
            drawFill: mainMockup.drawFill,
            upgradeColor: mainMockup.upgradeColor,
            glow: mainMockup.glow,
            render: {
                status: {
                    getFade: () => {
                        return 1;
                    },
                    getColor: () => {
                        return '#FFFFFF';
                    },
                    getBlend: () => {
                        return 0;
                    },
                    health: {
                        get: () => {
                            return 1;
                        },
                    },
                    shield: {
                        get: () => {
                            return 1;
                        },
                    },
                },
            },
            facing: mainMockup.facing,
            shape: mainMockup.shape,
            name: name.substring(1),
            upgradeTooltip: upgradeTooltip.substring(1),
            upgradeName: mainMockup.upgradeName,
            score: 0,
            tiggle: 0,
            layer: mainMockup.layer,
            position: mainMockup.position,
            rerootUpgradeTree,
            guns: {
                length: guns.length,
                getPositions: () => Array(guns.length).fill(0),
                getConfig: () => guns.map(g => {
                    return {
                        color: g.color,
                        alpha: g.alpha,
                        strokeWidth: g.strokeWidth,
                        borderless: g.borderless, 
                        drawFill: g.drawFill,
                        drawAbove: g.drawAbove,
                        length: g.length,
                        width: g.width,
                        aspect: g.aspect,
                        angle: g.angle,
                        direction: g.direction,
                        offset: g.offset,
                    };
                }),
                update: () => {},
            },
            turrets: turrets.map((t) => {
                let o = util.getEntityImageFromMockup(t.index);
                o.color = t.color;
                o.borderless = t.borderless;
                o.drawFill = t.drawFill;
                o.realSize = o.realSize / o.size * mainMockup.size * t.sizeFactor;
                o.size = mainMockup.size * t.sizeFactor;
                o.sizeFactor = t.sizeFactor;
                o.angle = t.angle;
                o.offset = t.offset;
                o.direction = t.direction;
                o.facing = t.direction + t.angle;
                o.render.f = o.facing;
                o.layer = t.layer;
                o.mirrorMasterAngle = t.mirrorMasterAngle;
                return o;
            }),
        };
    },
}
export { util }