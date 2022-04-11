function sentMessage_1() {
    const chatBox = document.getElementById("message1");
    const comment = chatBox.value;
    chatBox.value = "";
    chatBox.focus();
    if (comment !== "") {
        putMessage1(comment)
    }
}
function sentMessage_2() {
    const chatBox = document.getElementById("message2");
    const comment = chatBox.value;
    chatBox.value = "";
    chatBox.focus();
    if (comment !== "") {
        putMessage2(comment)
    }
}
function putMessage1(message) {
    let chat = document.getElementById('chat');
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    chat.innerHTML = chat.innerHTML + '<div class="row bg-dark">\
                            <div class="col-md-3 offset-md-8">\
                                <div class="row">\
                                    <div class="col-md-3 offset-md-6">\
                                        <small style="color:rgb(247, 247, 247);">'+time+'</small>\
                                    </div>\
                                </div>\
                                <div class="row  mb-3">\
                                        <div class="bg-success text-wrap" style="width: 30rem;border-radius: 15px;">\
                                            <h class="text-break fs-7">'+message+'</h>\
                                        </div>\
                                </div>\
                            </div>\
                            <div class="col-md-1">\
                                <img src="staticFile/image/flamingo.jpg" class="rounded-circle" alt="Cinque Terre" width="40" height="40">\
                            </div>\
                        </div>'
            
}
function putMessage2(message) {
    let chat = document.getElementById('chat');
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    chat.innerHTML = chat.innerHTML + '<div class="row bg-dark">\
                            <div class="col-md-1">\
                                <img src="staticFile/image/kitten.jpg" class="rounded-circle" alt="Cinque Terre" width="40" height="40">\
                            </div>\
                            <div class="col-md-3">\
                                <div class="row">\
                                    <div class="col-md-2">\
                                        <small style="color:rgb(247, 247, 247);">'+'kitten'+'</small>\
                                    </div>\
                                    <div class="col-md-3 offset-md-2">\
                                        <small style="color:rgb(247, 247, 247);">'+time+'</small>\
                                    </div>\
                                </div>\
                                <div class="row mb-3">\
                                        <div class="bg-body text-wrap" style="width: 30rem;border-radius: 15px;">\
                                            <h class="text-break fs-7">'+message+'</h>\
                                        </div>\
                                </div>\
                            </div>\
                        </div>'
    }