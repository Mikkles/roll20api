//Custom Pathfinder 2e Extinction Curse Circus Helper
//By Mik
//CURRENTLY NOT WORKING.
const Circus = (() => {
    var scriptName = "Roustabout";
    var version = "1.3";
    
    //Make a text object and return its ID.
    makeText = (x, y, defaultText) => {
        let newObj = createObj('text', {
            pageid: Campaign().get("playerpageid"),
            layer: "map",
            top: y,
            left: x,
            text: defaultText,
            font_family: "Patrick Hand",
            font_size: 32
        });
        return newObj.id;
    }

    //Define the chat menu here.
    chatMenu = () => {
        sendChat(scriptName, "/w gm &{template:rolls} {{header=Circus Updater}} {{desc=**Basic Stats** <br />"
        + "[Settlement Name](!circus change settlementName &#34;?{Settlement Name}&#34;) "
        + "[Circus Name](!circus change circusName &#34;?{Circus Name}&#34;) "
        + "[Date](!circus change date &#34;?{Date - eg Desmus 1}&#34;) "
        + "<br />**Starting Stats** : [Reset Exc and Ant](!circus change sExc sAnt 0)<br />"
        + "[Prestige](!circus change sPres &#34;?{Starting Prestige}&#34;) "
        + "[Excitment](!circus change sExc &#34;?{Starting Excitement}&#34;) "
        + "[Anticipation](!circus change sAnt &#34;?{Starting Anticipation}&#34;) "
        + "[Max ANT](!circus change sMaxAnt &#34;?{Max Anticipation}&#34;) "
        + "<br />**Downtime** [Advertisements](!circus change adTier &#34;?{Advert Tier}&#34;&#13;!circus change adGP &#34;?{Advert GP}&#34;&#13;!circus change adAnt &#34;?{Advert Anticipation}&#34;) "
        + "[Clear Downtime](!circus change day1act day2act day3act day4act day5act day6act d1Ant d2Ant d3Ant d4Ant d5Ant d6Ant adTier adGP adAnt &#34; &#34;) <br />"
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
        + "<br /> **Non Performers** [Clear Non Performers](!circus change nonPerfGroup &#34; &#34;)<br />"
        + "[Role 1](!circus change nonPerf1 &#34;?{Character}&#34;&#13;!circus change nonRole1 &#34;?{Role}&#34;) "
        + "[Role 2](!circus change nonPerf2 &#34;?{Character}&#34;&#13;!circus change nonRole2 &#34;?{Role}&#34;) "
        + "[Role 3](!circus change nonPerf3 &#34;?{Character}&#34;&#13;!circus change nonRole3 &#34;?{Role}&#34;) "
        + "[Role 4](!circus change nonPerf4 &#34;?{Character}&#34;&#13;!circus change nonRole4 &#34;?{Role}&#34;) "
        + "<br /> **Random Event** <br />"
        + "[Random Event](!circus change randomEvent &#34;?{Event}&#34;) "
        + "<br /> **ACT 1** [Clear](!circus change act1perf act1perfDC act1perfLevel act1action1 act1action2 act1action3 &#34; &#34;) <br /> " 
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
                version: 1.2,
                textIDs: {}
            }
            log("state.Circus being made again");
        } 
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
            
            params.shift();
            //log(params);

            //---Safety Check
            var page = getObj("page", Campaign().get("playerpageid"));
            let pageName = page.get("name");
            if (pageName != "Circus Show Sheet") {
                sendChat("Roustabout", "/w GM The player tab must be on the circus page, and it must be named Circus Show Sheet.", null, {
                    noarchive: true
                });
                return;
            }
            // =====================FUNCTIONALITY=====================
            // =========CALL MENU===================
            if (params[0] == "menu"){ chatMenu(); }
            
            //==========(NEW) initialize==========
            if (params[0] == "init") {
                
                //--- Delete old text objects.
                let oldText = {};
                oldText = findObjs({
                    _type: "text",
                    _pageid: Campaign().get("playerpageid"),
                    layer: "map"
                });
                if (_.isEmpty(oldText)) {
                    log('old text is empty')
                } else {
                    _.each(oldText, function(t) {
                        t.remove();
                    })
                }
                
                state.Circus.textIDs = {};

                let s = state.Circus.textIDs;
                s.act1action1 = makeText(175.75,1293.5,"act1action1");
                s.act1action2 = makeText(175.75,1363.5,"act1action2");
                s.act1action3 = makeText(175.75,1433.5,"act1action3");
                s.act1ant1 = makeText(525.75,1293.5,"act1ant1");
                s.act1ant2 = makeText(525.75,1363.5,"act1ant2");
                s.act1ant3 = makeText(525.75,1433.5,"act1ant3");
                s.act1exc1 = makeText(420.75,1293.5,"act1exc1");
                s.act1exc2 = makeText(420.75,1363.5,"act1exc2");
                s.act1exc3 = makeText(420.75,1433.5,"act1exc3");
                s.act1perfDC = makeText(525.75,1223.5,"act1perfDC");
                s.act1perfLevel = makeText(420.75,1223.5,"act1perfLevel");
                s.act1perf = makeText(228.25,1223.5,"act1perf");
                s.act1result1 = makeText(315.75,1293.5,"act1result1");
                s.act1result2 = makeText(315.75,1363.5,"act1result2");
                s.act1result3 = makeText(315.75,1433.5,"act1result3");
                s.act2act1 = makeText(175.75,1678.5,"act2act1");
                s.act2act2 = makeText(175.75,1748.5,"act2act2");
                s.act2act3 = makeText(175.75,1818.5,"act2act3");
                s.act2ant1 = makeText(525.75,1678.5,"act2ant1");
                s.act2ant2 = makeText(525.75,1748.5,"act2ant2");
                s.act2ant3 = makeText(525.75,1818.5,"act2ant3");
                s.act2exc1 = makeText(420.75,1678.5,"act2exc1");
                s.act2exc2 = makeText(420.75,1748.5,"act2exc2");
                s.act2exc3 = makeText(420.75,1818.5,"act2exc3");
                s.act2perfDC = makeText(525.75,1608.5,"act2perfDC");
                s.act2perfLevel = makeText(420.75,1608.5,"act2perfLevel");
                s.act2perf = makeText(228.25,1608.5,"act2perf");
                s.act2result1 = makeText(315.75,1678.5,"act2result1");
                s.act2result2 = makeText(315.75,1748.5,"act2result2");
                s.act2result3 = makeText(315.75,1818.5,"act2result3");
                s.act3act1 = makeText(175.75,2011,"act3act1");
                s.act3act2 = makeText(175.75,2081,"act3act2");
                s.act3act3 = makeText(175,2152,"act3act3");
                s.act3ant1 = makeText(525.75,2011,"act3ant1");
                s.act3ant2 = makeText(525.75,2081,"act3ant2");
                s.act3ant3 = makeText(525.75,2151,"act3ant3");
                s.act3exc1 = makeText(420.75,2011,"act3exc1");
                s.act3exc2 = makeText(420.75,2081,"act3exc2");
                s.act3exc3 = makeText(420.75,2151,"act3exc3");
                s.act3perfDC = makeText(525.75,1941,"act3perfDC");
                s.act3perfLevel = makeText(424,1941,"act3perfLevel");
                s.act3perf = makeText(231.5,1941,"act3perf");
                s.act3result1 = makeText(301.5,2011,"act3result1");
                s.act3result2 = makeText(301.5,2080.5,"act3result2");
                s.act3result3 = makeText(298.25,2151,"act3result3");
                s.act4act1 = makeText(683.25,1293.5,"act4act1");
                s.act4act2 = makeText(683.25,1363.5,"act4act2");
                s.act4act3 = makeText(683.25,1433.5,"act4act3");
                s.act4ant1 = makeText(1034,1296,"act4ant1");
                s.act4ant2 = makeText(1034,1365.5,"act4ant2");
                s.act4ant3 = makeText(1033.25,1433.5,"act4ant3");
                s.act4exc1 = makeText(928.25,1293.5,"act4exc1");
                s.act4exc2 = makeText(929,1365.5,"act4exc2");
                s.act4exc3 = makeText(928.25,1433.5,"act4exc3");
                s.act4perfDC = makeText(1034,1226,"act4perfDC");
                s.act4perfLevel = makeText(928.25,1223.5,"act4perfLevel");
                s.act4perf = makeText(735.75,1223.5,"act4perf");
                s.act4result1 = makeText(824,1296,"act4result1");
                s.act4result2 = makeText(824,1365.5,"act4result2");
                s.act4result3 = makeText(823.25,1433.5,"act4result3");
                s.act5act1 = makeText(683.25,1678.5,"act5act1");
                s.act5act2 = makeText(683.25,1748.5,"act5act2");
                s.act5act3 = makeText(683.25,1818.5,"act5act3");
                s.act5ant1 = makeText(1033.25,1678.5,"act5ant1");
                s.act5ant2 = makeText(1033.25,1748.5,"act5ant2");
                s.act5ant3 = makeText(1033.25,1818.5,"act5ant3");
                s.act5exc1 = makeText(928.25,1678.5,"act5exc1");
                s.act5exc2 = makeText(928.25,1748.5,"act5exc2");
                s.act5exc3 = makeText(928.25,1818.5,"act5exc3");
                s.act5perfDC = makeText(1033.25,1608.5,"act5perfDC");
                s.act5perfLevel = makeText(928.25,1608.5,"act5perfLevel");
                s.act5perf = makeText(735.75,1608.5,"act5perf");
                s.act5result1 = makeText(823.25,1678.5,"act5result1");
                s.act5result2 = makeText(823.25,1748.5,"act5result2");
                s.act5result3 = makeText(823.25,1818.5,"act5result3");
                s.act6act1 = makeText(682.5,2012.5,"act6act1");
                s.act6act2 = makeText(682.5,2082.5,"act6act2");
                s.act6act3 = makeText(682.5,2152.5,"act6act3");
                s.act6ant1 = makeText(1032.5,2012.5,"act6ant1");
                s.act6ant2 = makeText(1032.5,2082.5,"act6ant2");
                s.act6ant3 = makeText(1032.5,2152.5,"act6ant3");
                s.act6exc1 = makeText(927.5,2012.5,"act6exc1");
                s.act6exc2 = makeText(927.5,2082.5,"act6exc2");
                s.act6exc3 = makeText(927.5,2152.5,"act6exc3");
                s.act6perfDC = makeText(1032.5,1942.5,"act6perfDC");
                s.act6perfLevel = makeText(931.5,1941,"act6perfLevel");
                s.act6perf = makeText(735,1942.5,"act6perf");
                s.act6result1 = makeText(809,2011,"act6result1");
                s.act6result2 = makeText(809,2080.5,"act6result2");
                s.act6result3 = makeText(822.5,2152.5,"act6result3");
                s.act7act1 = makeText(1208.25,1293.5,"act7act1");
                s.act7act2 = makeText(1208.25,1363.5,"act7act2");
                s.act7act3 = makeText(1208.25,1433.5,"act7act3");
                s.act7ant1 = makeText(1539,1293,"act7ant1");
                s.act7ant2 = makeText(1539,1362.5,"act7ant2");
                s.act7ant3 = makeText(1540.75,1433.5,"act7ant3");
                s.act7exc1 = makeText(1435.75,1293.5,"act7exc1");
                s.act7exc2 = makeText(1434,1362.5,"act7exc2");
                s.act7exc3 = makeText(1435.75,1433.5,"act7exc3");
                s.act7perfDC = makeText(1539,1223,"act7perfDC");
                s.act7perfLevel = makeText(1435.75,1223.5,"act7perfLevel");
                s.act7perf = makeText(1243.25,1223.5,"act7perf");
                s.act7result1 = makeText(1329,1293,"act7result1");
                s.act7result2 = makeText(1329,1362.5,"act7result2");
                s.act7result3 = makeText(1330.75,1433.5,"act7result3");
                s.adAnt = makeText(1208.25,296,"adAnt");
                s.adGP = makeText(910.75,296,"adGP");
                s.adTier = makeText(560.75,296,"adTier");
                s.circusName = makeText(613.25,173.5,"circusName");
                s.date = makeText(1225.75,173.5,"date");
                s.day1act = makeText(507.5,367.5,"day1act");
                s.d1Ant = makeText(1208.25,366,"d1Ant");
                s.day2act = makeText(508.25,401,"day2act");
                s.d2Ant = makeText(1208.25,401,"d2Ant");
                s.day3act = makeText(508.25,436,"day3act");
                s.d3Ant = makeText(1208.25,436,"d3Ant");
                s.day4act = makeText(508.25,471,"day4act");
                s.d4Ant = makeText(1208.25,471,"d4Ant");
                s.day5act = makeText(508.25,506,"day5act");
                s.d5Ant = makeText(1208.25,506,"d5Ant");
                s.day6act = makeText(508.25,541,"day6act");
                s.d6Ant = makeText(1207.5,542.5,"d6Ant");
                s.finalAnt = makeText(1365,1802.5,"finalAnt");
                s.finalExc = makeText(1365.75,1713.5,"finalExc");
                s.finalPayout = makeText(1365.75,1976,"finalPayout");
                s.finalPres = makeText(1365.75,1888.5,"finalPres");
                s.nonPerf1 = makeText(1033.25,698.5,"nonPerf1");
                s.nonPerf2 = makeText(1033.25,768.5,"nonPerf2");
                s.nonPerf3 = makeText(1033.25,838.5,"nonPerf3");
                s.nonPerf4 = makeText(1033.25,908.5,"nonPerf4");
                s.nonRole1 = makeText(1400.75,698.5,"nonRole1");
                s.nonRole2 = makeText(1400.75,768.5,"nonRole2");
                s.nonRole3 = makeText(1400.75,838.5,"nonRole3");
                s.nonRole4 = makeText(1400.75,908.5,"nonRole4");
                s.randomEvent = makeText(1243.25,996,"randomEvent");
                s.settlementName = makeText(613.25,208.5,"settlementName");
                s.sAnt = makeText(1487.5,385,"sAnt");
                s.sExc = makeText(1487.5,297.5,"sExc");
                s.sMaxAnt = makeText(1487.5,472.5,"sMaxAnt");
                s.sPres = makeText(1487.5,210,"sPres");
                s.tempUpgrade1 = makeText(473.25,943.5,"tempUpgrade1");
                s.tempUpgrade2 = makeText(473.25,978.5,"tempUpgrade2");
                s.tempUpgrade3 = makeText(472.75,1013,"tempUpgrade3");
                s.tempUpgrade4 = makeText(472.75,1048,"tempUpgrade4");
                
                
                
                
                
            }

            // ================SETUP=============== (OLD INITALIZE)
            /*
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
                    log(newObj.get("text") + " Top: " + newObj.get("top") + " Left: " + newObj.get("left"));
                })
            }*/
            
             //Version 1.2 Change
             /*
            if (params[0] == "change") {
                let target = params[1];
                let input = params[2];
                if (typeof state.Circus.textIDs[target] != "undefined"){
                    let obj = getObj("text", state.Circus.textIDs[target]);
                    if (Array.isArray(input)) {
                        _.each(input, function(current) {
                        obj.set("text", current);
                        })
                    } else {
                        if (input == undefined) input = " ";
                        obj.set("text", input);
                    }
        
                } else {
                    sendChat(scriptName, "/w gm Error! " + target + " not found, or there was no input!");
                }
            }*/
        
            
            //VERSION 1.3 CHANGE
            if (params[0] == "change2") {
                params.shift();
                
                let input = params.pop();
                
                
                _.each(params, function(target) {
                    let obj = getObj("text", state.Circus.textIDs[target]);
                    obj.set("text", input);
                })
            }
            
        }
    })
})();

