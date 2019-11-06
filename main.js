function start() {
    //console.log("started");
    var allLink = document.getElementsByTagName("a");
    var res = [];
    for (var link of allLink) {
        if (link["href"] != null && link["href"].includes("problem")) {
            res.push(link);
        }
    }
    applyList(res);
}

function applyList(list) {
    chrome.storage.local.get('DoneList', function (items) {
        if (items.DoneList != undefined) {
            var length = list.length;
            var saveArr = items.DoneList;
            for (var i = 0; i < length; i++) {
                var currentUrl = list[i]["href"];
                if (currentUrl !== undefined) {
                    for (var j = 0; j < saveArr.length; j++) {
                        if (saveArr[j].includes(currentUrl)) {
                            list[i].style.color = '#006600';
                            list[i].style.textDecoration = 'line-through';
                        }
                    }
                }
            }
        }
    });

    chrome.storage.local.get('NeedPratice', function (items) {
        if (items.NeedPratice != undefined) {
            var length = list.length;
            var saveArr = items.NeedPratice;
            for (var i = 0; i < length; i++) {
                var currentUrl = list[i]["href"];
                if (currentUrl !== undefined) {
                    for (var j = 0; j < saveArr.length; j++) {
                        if (saveArr[j].includes(currentUrl)) {
                            list[i].style.color = '#ffee00';
                            list[i].style.textDecoration = 'line-through';
                        }
                    }
                }
            }
        }
    });

    chrome.storage.local.get('NotDoneList', function (items) {
        if (items.NotDoneList != undefined) {
            var length = list.length;
            var saveArr = items.NotDoneList;
            for (var i = 0; i < length; i++) {
                var currentUrl = list[i]["href"];
                if (currentUrl !== undefined) {
                    for (var j = 0; j < saveArr.length; j++) {
                        if (saveArr[j].includes(currentUrl)) {
                            list[i].style.color = '#808080';
                            list[i].style.textDecoration = 'line-through';
                        }
                    }
                }
            }
        }
    });

}

setTimeout(function () {
    start();
}, 3000);