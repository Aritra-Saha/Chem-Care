/*
window.onload = function () {
    document.getElementById("myBtn").addEventListener("click", displayDate);

    function displayDate() {
      document.getElementById("demo").innerHTML = Date();
    }
}*/

/*
$(document).ready(function() {
    $.ajax({
        url: "test.py",
        data: { param: input }
        success: function(response) {
            console.log(response)
        }
    });
});*/
//window.onload = function() {
console.log("HELLoooO");

function postData(input) {
    $.ajax({
        type: "POST",
        url: "http://localhost:8000/StarterHacks%20Project/test.py",
        data: { param: input },
        success: callbackFunc
    });
}

function callbackFunc(response) {
    document.getElementById("test").innerHTML = response;
}

chrome.runtime.sendMessage(
    "foo",
    function (response) {
        //postData(response);
        console.log(response);
    }
);

//postData(url);

//postData(tablink);
//}


//postData("fyk");

/*
var word = "Shampoo",
    queue = [document.body],
    curr;
while (curr = queue.pop()) {
    if (!curr.textContent.match(word)) continue;
    for (var i = 0; i < curr.childNodes.length; ++i) {
        switch (curr.childNodes[i].nodeType) {
            case Node.TEXT_NODE: // 3
                if (curr.childNodes[i].textContent.match(word)) {
                    console.log("Found!");
                    console.log(curr);
                    // you might want to end your search here.
                }
                break;
            case Node.ELEMENT_NODE: // 1
                queue.push(curr.childNodes[i]);
                break;
        }
    }
}*/