//Custom Pathfinder 2e Extinction Curse Circus Helper
//By Mik
//CURRENTLY NOT WORKING.
const Circus = (() => {
    var scriptName = "Roustabout";
    var textList = {};
    
    chatMenu = function() {
        sendChat(scriptName, "/w gm &{template:rolls} {{header=Circus Updater}} {{desc=**Basic Stats** <br />[Setup](!circus setup)[Settlement Name](!circus change settlementName '?{settlement name}') }}", null);
    }
    
    on("ready", function() {
        chatMenu();
        if (!state.Circus) {
            state.Circus = {
                version: 1.0,
                textIDs: []
                
            }
            log("state.Circus being made again");
        } else { 
            _.each(state.Circus.textIDs, function(current) {
                textList[current] = getObj('text', state.Circus.textIDs[current]);
            })
            
        }
    });
    
    on("chat:message", function(msg) {
        if (msg.type == "api" && msg.content.indexOf("!circus") === 0) {
            //var str = 'single words "fixed string of words"';
            var params = msg.content.match(/\w+|"[^"]+"/g),
                i = params.length;
            while (i--) {
                params[i] = params[i].replace(/"/g, "");
            }
            //let params = msg.content.split(" ");
            //SAFETY CHECKER
            var page = getObj("page", Campaign().get("playerpageid"));
            let pageName = page.get("name");
            if (pageName != "Circus Show Sheet") {
                sendChat("Roustabout", "/w GM The player tab must be on the circus page, and it must be named Circus Show Sheet.", null, {
                    noarchive: true
                });
                return;
            }
            ///SETUP
            if (params[1] == "setup") {
                
                let oldText = {};
                
                oldText = findObjs({
                    _type: "text",
                    _pageid: Campaign().get("playerpageid"),
                    layer: "objects"
                });
                
                if ( _.isEmpty(oldText) ) {
                    log('old text is empty')
                    
                }else{
                    _.each(oldText, function(t) {
                        t.remove();
                    })
                }
                
                textList = {};
                let objs = findObjs({
                    _type: "graphic",
                    _pageid: Campaign().get("playerpageid"),
                    layer: "gmlayer",
                });
                
                
                _.each(objs, function(current) {
                    let left = current.get("left");
                    let top = current.get("top");
                    let name = current.get("name");
                    
                    textList[name] = createObj('text', {
                        pageid: Campaign().get("playerpageid"),
                        layer: "objects",
                        top: top,
                        left: left,
                        text: name,
                        font_family: "Patrick Hand",
                        font_size: 32
                    });
                })
                
                _.each(textList, function(current) {
                    log('god this far')
                    let thisID = current.id;
                    let name = current.get("name"); 
                    state.Circus.textIDs[name] = thisID;
                })
                //state.Circus.textList = textList;
            }
            //TESTING
            if (params[1] == "change") {
                let target = params[2];
                let input = params[3];
                if (typeof textList[target] != "undefined") {
                    textList[target].set("text", input);
                    
                } else {
                    sendChat(scriptName, "/w gm Error! " + target + " not found!");
                }
            }
        }
    });
})();
