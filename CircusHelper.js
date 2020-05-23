//Custom Pathfinder 2e Extinction Curse Circus Helper
//By Mik
//CURRENTLY NOT WORKING.
const Circus = (() => {
    var scriptName = "Roustabout";
    var version = "1.2";

    //Define the chat menu here.
    chatMenu = function() {
        sendChat(scriptName, "/w gm &{template:rolls} {{header=Circus Updater}} {{desc=**Basic Stats** <br />"
        + "[Settlement Name](!circus change settlementName &#34;?{Settlement Name}&#34;) "
        + "[Circus Name](!circus change circusName &#34;?{Circus Name}&#34;) "
        + "[Date](!circus change date &#34;?{Date - eg Desmus 1}&#34;) "
        + "<br />**Starting Stats** : [Set All except Prestige](!circus change sExc &#34;?{Starting Excitement}&#34;&#13;!circus change sAnt &#34;?{Starting Anticipation}&#34;)<br />"
        + "[Prestige](!circus change sPres &#34;?{Starting Prestige}&#34;) "
        + "[Excitment](!circus change sExc &#34;?{Starting Excitement}&#34;) "
        + "[Anticipation](!circus change sAnt &#34;?{Starting Anticipation}&#34;) "
        + "[Max ANT](!circus change sMaxAnt &#34;?{Max Anticipation}&#34;) "
        + "<br />**Downtime Activities** [Advertisements](!circus change adTier &#34;?{Advert Tier}&#34;&#13;!circus change adGP &#34;?{Advert GP}&#34;&#13;!circus change adAnt &#34;?{Advert Anticipation}&#34;) <br />"
        + "[Day 1](!circus change day1act &#34;?{Day 1 Activity}&#34;&#13;!circus change d1Ant &#34;?{Day 1 Anticipation}&#34;) "
        + "[Day 2](!circus change day2act &#34;?{Day 2 Activity}&#34;&#13;!circus change d2Ant &#34;?{Day 2 Anticipation}&#34;) "
        + "[Day 3](!circus change day3act &#34;?{Day 3 Activity}&#34;&#13;!circus change d3Ant &#34;?{Day 3 Anticipation}&#34;) "
        + "[Day 4](!circus change day4act &#34;?{Day 4 Activity}&#34;&#13;!circus change d4Ant &#34;?{Day 4 Anticipation}&#34;) "
        + "[Day 5](!circus change day5act &#34;?{Day 5 Activity}&#34;&#13;!circus change d5Ant &#34;?{Day 5 Anticipation}&#34;) "
        + "[Day 6](!circus change day6act &#34;?{Day 6 Activity}&#34;&#13;!circus change d6Ant &#34;?{Day 6 Anticipation}&#34;) "
        + "<br /> **Temp Upgrades** <br />"
        + "[Upgrade 1](!circus change tempUpgrade1 &#34;?{Temp Upgrade 1}&#34;) "
        + "[Upgrade 2](!circus change tempUpgrade2 &#34;?{Temp Upgrade 2}&#34;) "
        + "[Upgrade 3](!circus change tempUpgrade3 &#34;?{Temp Upgrade 3}&#34;) "
        + "[Upgrade 4](!circus change tempUpgrade4 &#34;?{Temp Upgrade 4}&#34;) "
        + "<br /> **Non Performers** <br />"
        + "[Role 1](!circus change nonPerf1 &#34;?{Character}&#34;&#13;!circus change nonRole1 &#34;?{Role}&#34;) "
        + "[Role 2](!circus change nonPerf2 &#34;?{Character}&#34;&#13;!circus change nonRole2 &#34;?{Role}&#34;) "
        + "[Role 3](!circus change nonPerf3 &#34;?{Character}&#34;&#13;!circus change nonRole3 &#34;?{Role}&#34;) "
        + "[Role 4](!circus change nonPerf4 &#34;?{Character}&#34;&#13;!circus change nonRole4 &#34;?{Role}&#34;) "
        + "<br /> **Random Event** <br />"
        + "[Random Event](!circus change randomEvent &#34;?{Event}&#34;) "
        + "<br /> **ACT 1** <br />"
        + "[Performer](!circus change act1perf &#34;?{Act 1 Performer}&#34;&#13;!circus change act1perfLevel &#34;?{Act 1 Level}&#34;&#13;!circus change act1perfDC &#34;?{Act 1 DC}&#34;) "
        + "[Action 1](!circus change act1action1 &#34;?{Action 1|Perform|Clowns|Pass}&#34;&#13;!circus change act1result1 &#34;?{Action 1 Result|Critical|Success|Failure|Fumble}&#34;&#13;!circus change act1exc1 &#34;?{Action 1 Excitement}&#34;&#13;!circus change act1ant1 &#34;?{Action 1 Anticipation}&#34;) "
        + "[Action 2](!circus change act1action2 &#34;?{Action 2|Perform|Clowns|Pass}&#34;&#13;!circus change act1result2 &#34;?{Action 2 Result|Critical|Success|Failure|Fumble}&#34;&#13;!circus change act1exc2 &#34;?{Action 2 Excitement}&#34;&#13;!circus change act1ant2 &#34;?{Action 2 Anticipation}&#34;) "
        + "[Action 3](!circus change act1action3 &#34;?{Action 3|Perform|Clowns|Pass}&#34;&#13;!circus change act1result3 &#34;?{Action 3 Result|Critical|Success|Failure|Fumble}&#34;&#13;!circus change act1exc3 &#34;?{Action 3 Excitement}&#34;&#13;!circus change act1ant3 &#34;?{Action 1 Anticipation}&#34;) "
        + "<br /> **ACT 2** <br />"
        + "[Performer](!circus change act2perf &#34;?{Act 2 Performer}&#34;&#13;!circus change act2perfLevel &#34;?{Act 2 Level}&#34;&#13;!circus change act2perfDC &#34;?{Act 2 DC}&#34;) "
        + "[Action 1](!circus change act2action1 &#34;?{Action 1|Perform|Clowns|Pass}&#34;&#13;!circus change act2result1 &#34;?{Action 1 Result|Critical|Success|Failure|Fumble}&#34;&#13;!circus change act2exc1 &#34;?{Action 1 Excitement}&#34;&#13;!circus change act2ant1 &#34;?{Action 1 Anticipation}&#34;) "
        + "[Action 2](!circus change act2action2 &#34;?{Action 2|Perform|Clowns|Pass}&#34;&#13;!circus change act2result2 &#34;?{Action 2 Result|Critical|Success|Failure|Fumble}&#34;&#13;!circus change act2exc2 &#34;?{Action 2 Excitement}&#34;&#13;!circus change act2ant2 &#34;?{Action 2 Anticipation}&#34;) "
        + "[Action 3](!circus change act2action3 &#34;?{Action 3|Perform|Clowns|Pass}&#34;&#13;!circus change act2result3 &#34;?{Action 3 Result|Critical|Success|Failure|Fumble}&#34;&#13;!circus change act2exc3 &#34;?{Action 3 Excitement}&#34;&#13;!circus change act2ant3 &#34;?{Action 3 Anticipation}&#34;) "
        + "<br /> **Act 3** <br />"
        + "[Performer](!circus change act3perf &#34;?{Act 3 Performer}&#34;&#13;!circus change act3perfLevel &#34;?{Act 3 Level}&#34;&#13;!circus change act3perfDC &#34;?{Act 3 DC}&#34;) "
        + "[Action 1](!circus change act3action1 &#34;?{Action 1|Perform|Clowns|Pass}&#34;&#13;!circus change act3result1 &#34;?{Action 1 Result|Critical|Success|Failure|Fumble}&#34;&#13;!circus change act3exc1 &#34;?{Action 1 Excitement}&#34;&#13;!circus change act3ant1 &#34;?{Action 1 Anticipation}&#34;) "
        + "[Action 2](!circus change act3action2 &#34;?{Action 2|Perform|Clowns|Pass}&#34;&#13;!circus change act3result2 &#34;?{Action 2 Result|Critical|Success|Failure|Fumble}&#34;&#13;!circus change act3exc2 &#34;?{Action 2 Excitement}&#34;&#13;!circus change act3ant2 &#34;?{Action 2 Anticipation}&#34;) "
        + "[Action 3](!circus change act3action3 &#34;?{Action 3|Perform|Clowns|Pass}&#34;&#13;!circus change act3result3 &#34;?{Action 3 Result|Critical|Success|Failure|Fumble}&#34;&#13;!circus change act3exc3 &#34;?{Action 3 Excitement}&#34;&#13;!circus change act3ant3 &#34;?{Action 3 Anticipation}&#34;) "
        + "<br /> **Act 4** <br />"
        + "[Performer](!circus change act4perf &#34;?{Act 4 Performer}&#34;&#13;!circus change act4perfLevel &#34;?{Act 4 Level}&#34;&#13;!circus change act4perfDC &#34;?{Act 4 DC}&#34;) "
        + "[Action 1](!circus change act4action1 &#34;?{Action 1|Perform|Clowns|Pass}&#34;&#13;!circus change act4result1 &#34;?{Action 1 Result|Critical|Success|Failure|Fumble}&#34;&#13;!circus change act4exc1 &#34;?{Action 1 Excitement}&#34;&#13;!circus change act4ant1 &#34;?{Action 1 Anticipation}&#34;) "
        + "[Action 2](!circus change act4action2 &#34;?{Action 2|Perform|Clowns|Pass}&#34;&#13;!circus change act4result2 &#34;?{Action 2 Result|Critical|Success|Failure|Fumble}&#34;&#13;!circus change act4exc2 &#34;?{Action 2 Excitement}&#34;&#13;!circus change act4ant2 &#34;?{Action 2 Anticipation}&#34;) "
        + "[Action 3](!circus change act4action3 &#34;?{Action 3|Perform|Clowns|Pass}&#34;&#13;!circus change act4result3 &#34;?{Action 3 Result|Critical|Success|Failure|Fumble}&#34;&#13;!circus change act4exc3 &#34;?{Action 3 Excitement}&#34;&#13;!circus change act4ant3 &#34;?{Action 3 Anticipation}&#34;) "
        + "<br /> **Act 5** <br />"
        + "[Performer](!circus change act5perf &#34;?{Act 5 Performer}&#34;&#13;!circus change act5perfLevel &#34;?{Act 5 Level}&#34;&#13;!circus change act5perfDC &#34;?{Act 5 DC}&#34;) "
        + "[Action 1](!circus change act5action1 &#34;?{Action 1|Perform|Clowns|Pass}&#34;&#13;!circus change act5result1 &#34;?{Action 1 Result|Critical|Success|Failure|Fumble}&#34;&#13;!circus change act5exc1 &#34;?{Action 1 Excitement}&#34;&#13;!circus change act5ant1 &#34;?{Action 1 Anticipation}&#34;) "
        + "[Action 2](!circus change act5action2 &#34;?{Action 2|Perform|Clowns|Pass}&#34;&#13;!circus change act5result2 &#34;?{Action 2 Result|Critical|Success|Failure|Fumble}&#34;&#13;!circus change act5exc2 &#34;?{Action 2 Excitement}&#34;&#13;!circus change act5ant2 &#34;?{Action 2 Anticipation}&#34;) "
        + "[Action 3](!circus change act5action3 &#34;?{Action 3|Perform|Clowns|Pass}&#34;&#13;!circus change act5result3 &#34;?{Action 3 Result|Critical|Success|Failure|Fumble}&#34;&#13;!circus change act5exc3 &#34;?{Action 3 Excitement}&#34;&#13;!circus change act5ant3 &#34;?{Action 3 Anticipation}&#34;) "
        + "<br /> **Act 6** <br />"
        + "[Performer](!circus change act6perf &#34;?{Act 6 Performer}&#34;&#13;!circus change act6perfLevel &#34;?{Act 6 Level}&#34;&#13;!circus change act6perfDC &#34;?{Act 6 DC}&#34;) "
        + "[Action 1](!circus change act6action1 &#34;?{Action 1|Perform|Clowns|Pass}&#34;&#13;!circus change act6result1 &#34;?{Action 1 Result|Critical|Success|Failure|Fumble}&#34;&#13;!circus change act6exc1 &#34;?{Action 1 Excitement}&#34;&#13;!circus change act6ant1 &#34;?{Action 1 Anticipation}&#34;) "
        + "[Action 2](!circus change act6action2 &#34;?{Action 2|Perform|Clowns|Pass}&#34;&#13;!circus change act6result2 &#34;?{Action 2 Result|Critical|Success|Failure|Fumble}&#34;&#13;!circus change act6exc2 &#34;?{Action 2 Excitement}&#34;&#13;!circus change act6ant2 &#34;?{Action 2 Anticipation}&#34;) "
        + "[Action 3](!circus change act6action3 &#34;?{Action 3|Perform|Clowns|Pass}&#34;&#13;!circus change act6result3 &#34;?{Action 3 Result|Critical|Success|Failure|Fumble}&#34;&#13;!circus change act6exc3 &#34;?{Action 3 Excitement}&#34;&#13;!circus change act6ant3 &#34;?{Action 3 Anticipation}&#34;) "
        + "<br /> **Act 7** <br />"
        + "[Performer](!circus change act7perf &#34;?{Act 7 Performer}&#34;&#13;!circus change act7perfLevel &#34;?{Act 7 Level}&#34;&#13;!circus change act7perfDC &#34;?{Act 7 DC}&#34;) "
        + "[Action 1](!circus change act7action1 &#34;?{Action 1|Perform|Clowns|Pass}&#34;&#13;!circus change act7result1 &#34;?{Action 1 Result|Critical|Success|Failure|Fumble}&#34;&#13;!circus change act7exc1 &#34;?{Action 1 Excitement}&#34;&#13;!circus change act7ant1 &#34;?{Action 1 Anticipation}&#34;) "
        + "[Action 2](!circus change act7action2 &#34;?{Action 2|Perform|Clowns|Pass}&#34;&#13;!circus change act7result2 &#34;?{Action 2 Result|Critical|Success|Failure|Fumble}&#34;&#13;!circus change act7exc2 &#34;?{Action 2 Excitement}&#34;&#13;!circus change act7ant2 &#34;?{Action 2 Anticipation}&#34;) "
        + "[Action 3](!circus change act7action3 &#34;?{Action 3|Perform|Clowns|Pass}&#34;&#13;!circus change act7result3 &#34;?{Action 3 Result|Critical|Success|Failure|Fumble}&#34;&#13;!circus change act7exc3 &#34;?{Action 3 Excitement}&#34;&#13;!circus change act7ant3 &#34;?{Action 3 Anticipation}&#34;) "
        + "}}", null);
    }

        ///======ON READY=========
    on("ready", function() {
        
        if (!state.Circus) {
            state.Circus = {
                version: 1.1,
                textIDs: {}
            }
            log("state.Circus being made again");
        } 
        //--Finally, send chat menu.
        //chatMenu();
        
    });

   //=====ON MESSAGE=======
    on("chat:message", function(msg) {
        if (msg.type == "api" && msg.content.indexOf("!circus") === 0) {

            //---Split msg into parameters.
            var params = msg.content.match(/\w+|"[^"]+"/g),
                i = params.length;
            while (i--) {
                params[i] = params[i].replace(/"/g, "");
            }
            log(params);

            //---Safety Check
            var page = getObj("page", Campaign().get("playerpageid"));
            let pageName = page.get("name");
            if (pageName != "Circus Show Sheet") {
                sendChat("Roustabout", "/w GM The player tab must be on the circus page, and it must be named Circus Show Sheet.", null, {
                    noarchive: true
                });
                return;
            }
            
            if (params[1] == "menu"){ chatMenu(); }

            // ================NEW SETUP===============
            if (params[1] == "setup") {
                // Clear state
                state.Circus.textIDs = {};

                //--- Delete old text objects.
                let oldText = {};
                oldText = findObjs({
                    _type: "text",
                    _pageid: Campaign().get("playerpageid"),
                    layer: "objects"
                });
                if (_.isEmpty(oldText)) {
                    log('old text is empty')
                } else {
                    _.each(oldText, function(t) {
                        t.remove();
                    })
                }

                //--- Find all indicator tokens
                let objs = findObjs({
                    _type: "graphic",
                    _pageid: Campaign().get("playerpageid"),
                    layer: "gmlayer",
                });

                //--- Create text objects in the correct spaces

                _.each(objs, function(currentObj) {
                    if (currentObj == undefined) {
                        log("WHAT");
                    }
                    let left = currentObj.get("left");
                    let top = currentObj.get("top");
                    let name = currentObj.get("name");

                    let newObj = createObj('text', {
                        pageid: Campaign().get("playerpageid"),
                        layer: "objects",
                        top: top,
                        left: left,
                        text: name,
                        font_family: "Patrick Hand",
                        font_size: 32
                    });
                    state.Circus.textIDs[name] = newObj.id;
                    //log(newObj.get("text") + " Top: " + newObj.get("top") + " Left: " + newObj.get("left"));
                })
            }
            
            if (params[1] == "change") {
                let target = params[2];
                let input = params[3];
                //log(state.Circus.textIDs[target] + "!!!!")
                if (typeof state.Circus.textIDs[target] != "undefined"){
                    if (input == undefined) input = " ";
                    let obj = getObj("text", state.Circus.textIDs[target]);
                    obj.set("text", input);
                    
                    
                    
                    
                } else {
                    sendChat(scriptName, "/w gm Error! " + target + " not found, or there was no input!");
                }
            
            }
            
            /*
            if (params[1] == "reset") {
                let target = params[2];
                let target2 = params[3];
                
                switch(target){
                    
                    case "act":
                        
                        switch(target2) {
                            case "all":
                                let objNames = findObjs({
                                    pageid: Campaign().get("playerpageid"),
                                    type: "text",
                                    layer: "objects",
                                });
                                break;
                            
                            default:
                                sendChat(scriptName, "/w gm Error! " + target2 + " not found.");
                                break;
                            
                        
                        }
                        break;
                        
                    default:
                        sendChat(scriptName, "/w gm Error! " + target + " not found.");
                        break;
                }
            }
            */
        }
    })
})();

