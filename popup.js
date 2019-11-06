$(function () {
    $("input:radio[name=action]").click(function () {
        //console.log($(this).val());
        var action = $(this).val();
        if (action == "Done") {
            addToDone();
        } else if (action == "NotDone") {
            addToNotDone();
        } else if (action == "NeedPratice") {
            addToNeedPratice();
        }
    });

    function addToDone() {
        chrome.storage.local.get('DoneList', function (items) {
            chrome.tabs.query({
                active: true,
                currentWindow: true
            }, function (tabs) {
                var url = tabs[0].url;
                var doneArr = [];
                if (items.DoneList != undefined) {
                    doneArr = items.DoneList;
                }
                if (doneArr.indexOf(url) == -1) {
                    doneArr.push(url);
                }
                chrome.storage.local.set({
                    "DoneList": doneArr
                });
            });
        });
    }

    function addToNotDone() {
        chrome.storage.local.get('NotDoneList', function (items) {
            chrome.tabs.query({
                active: true,
                currentWindow: true
            }, function (tabs) {
                var url = tabs[0].url;
                var notDoneArr = [];
                if (items.NotDoneList != undefined) {
                    notDoneArr = items.DoneList;
                }
                if (notDoneArr.indexOf(url) == -1) {
                    notDoneArr.push(url);
                }
                chrome.storage.local.set({
                    "NotDoneList": notDoneArr
                });
            });
        });
    }

    function addToNeedPratice() {
        chrome.storage.local.get('NeedPratice', function (items) {
            chrome.tabs.query({
                active: true,
                currentWindow: true
            }, function (tabs) {
                var url = tabs[0].url;
                var needPratice = [];
                if (items.NeedPratice != undefined) {
                    needPratice = items.DoneList;
                }
                if (needPratice.indexOf(url) == -1) {
                    needPratice.push(url);
                }
                chrome.storage.local.set({
                    "NeedPratice": needPratice
                });
            });
        });
    }
});