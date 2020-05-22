//Custom Pathfinder 2e Extinction Curse Circus Helper
//By Mik
//CURRENTLY KINDA WORKING.
const Circus = (() => {
    var scriptName = "Roustabout";
    var version = "1.1"

    //Define the chat menu here.
    chatMenu = function() {
        sendChat(scriptName, "/w gm &{template:rolls} {{header=Circus Updater}} {{desc=**Basic Stats** <br />"
        + "[Settlement Name](!circus change settlementName &#34;?{Settlement Name}&#34;) "
        + "[Circus Name](!circus change circusName &#34;?{Circus Name}&#34;) "
        + "[Date](!circus change date &#34;?{Date - eg Desmus 1}&#34;) "
        + "<br />**Starting Stats**<br />"
        + "[Prestige](!circus change sPres &#34;?{Starting Prestige}&#34;) "
        + "[Excitment](!circus change sExc &#34;?{Starting Excitement}&#34;) "
        + "[Anticipation](!circus change sAnt &#34;?{Starting Anticipation}&#34;) "
        + "[Max ANT](!circus change sMaxAnt &#34;?{Max Anticipation}&#34;) "
        + "<br /><br />[Setup](!circus setup)}}", null);
    }

        ///======ON READY=========
    on("ready", function() {
        
        if (!state.Circus) {
            state.Circus = {
                textIDs: {}
            }
            log("state.Circus being made again");
        } 
        //--Finally, send chat menu.
        chatMenu();
        
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
                    state.Circus.textIDs[name] = newObj.id
                })
            }
            
            if (params[1] == "change") {
                let target = params[2];
                let input = params[3];
                //log(state.Circus.textIDs[target] + "!!!!")
                if (typeof state.Circus.textIDs[target] != "undefined"){
                    let obj = getObj("text", state.Circus.textIDs[target]);
                    obj.set("text", input);
                    
                    
                    
                    
                } else {
                    sendChat(scriptName, "/w gm Error! " + target + " not found!");
                }
            
            }
            
        }
    })
})();

