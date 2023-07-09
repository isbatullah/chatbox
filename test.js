(function() {
    // CSS code
    var widgetStyles = `

    

/* CHATBOX
=============== */
.chatbox {
    position: absolute;
    bottom: 30px;
    right: 30px;
}

/* CONTENT IS CLOSE */
.chatbox__support {
    display: flex;
    flex-direction: column;
    background: #eee;
    width: 300px;
    height: 350px;
    z-index: -123456;
    opacity: 0;
    transition: all .5s ease-in-out;
}

/* CONTENT ISOPEN */
.chatbox--active {
    transform: translateY(-40px);
    z-index: 123456;
    opacity: 1;
    
}

/* BUTTON */
.chatbox__button {
    text-align: right;
}


/* HEADER */
.chatbox__header {
    position: sticky;
    top: 0;
    background: orange;
}

/* MESSAGES */
.chatbox__messages {
    margin-top: auto;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    flex-direction: column-reverse;
}

.messages__item {
    background: orange;
    max-width: 60.6%;
    width: fit-content;
}

.messages__item--operator {
    margin-left: auto;
}

.messages__item--visitor {
    margin-right: auto;
}

/* FOOTER */
.chatbox__footer {
    position: sticky;
    bottom: 0;
}


* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

*, html {
    --primaryGradient: linear-gradient(93.12deg, #581B98 0.52%, #9C1DE7 100%);
    --secondaryGradient: linear-gradient(268.91deg, #581B98 -2.14%, #9C1DE7 99.69%);
    --primaryBoxShadow: 0px 10px 15px rgba(0, 0, 0, 0.1);
    --secondaryBoxShadow: 0px -10px 15px rgba(0, 0, 0, 0.1);
    --light: 300;
    --regular: 400;
    --semiBold: 600;
    --extraLight: 300;
    --italic: 300;
    --primary: #581B98;
}

/* 300;0,400;0,600;1,300 */

body {
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
    font-size: 100%;
    background: #F1F1F1;
}

.chatbox__support {
    background: #f9f9f9;
    height: 450px;
    width: 350px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
}

/* HEADER */
.chatbox__header {
    background: var(--primaryGradient);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 15px 20px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    box-shadow: var(--primaryBoxShadow);
}

.chatbox__image--header {
    margin-right: 10px;
}

.chatbox__heading--header {
    font-size: 1.2rem;
    color: white;
}

.chatbox__description--header {
    font-size: .9rem;
    color: white;
}

/* Messages */
.chatbox__messages {
    padding: 0 20px;
}

.messages__item {
    margin-top: 10px;
    background: #E0E0E0; 
    padding: 8px 12px;
    max-width: 70%;
}

.messages__item--visitor,
.messages__item--typing {
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
}

.messages__item--operator {
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
    background: var(--primary);
    color: white;
}

/* FOOTER */
.chatbox__footer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 20px 20px;
    background: var(--secondaryGradient);
    box-shadow: var(--secondaryBoxShadow);
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    margin-top: 20px;
}

.chatbox__footer input {
    border: none;
    padding: 10px 10px;
    border-radius: 30px;
    text-align: center;
}

.chatbox__send--footer {
    color: white;
}

.chatbox__button button,
.chatbox__button button:focus,
.chatbox__button button:visited {
    padding: 10px;
    background: white;
    border: none;
    outline: none;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    border-bottom-left-radius: 50px;
    box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1);
    cursor: pointer;
}

.messages__item--typing {
    will-change: transform;
    width: auto;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    border-bottom-right-radius: 20px;
    padding: 15px 20px;
    display: table;
    margin-right: auto;
    position: relative;
    animation: 2s bulge infinite ease-out;
}

.messages__item--typing::before,
.messages__item--typing::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: -2px;
      height: 10px;
      width: 10px;
      border-radius: 50%;
}
.messages__item--typing::after {
      height: 10px;
      width: 10px;
      left: -10px;
      bottom: -10px;
}
span.messages__dot {
    height: 8px;
    width: 8px;
    float: left;
    margin: 0 1px;
    background-color: #9E9EA1;
    display: block;
    border-radius: 50%;
    opacity: 0.4;
    animation: 1s blink infinite;
}
  
@keyframes blink {
    50% {
        opacity: 1;
    }
}
  
@keyframes bulge {
    50% {
        transform: scale(1.05);
    }
}
  
    `;




    // HTML code
    var widgetHTML = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;0,600;1,300&display=swap" rel="stylesheet">
        <title>Chatbox</title>
    </head>
    <body>
        <div class="container">
            <div class="chatbox">
                <div class="chatbox__support">
                    <div class="chatbox__header">
                        <div class="chatbox__image--header">
                            <img src="https://raw.githubusercontent.com/isbatullah/chatbox/main/images/image.png" alt="image">
                        </div>
                        <div class="chatbox__content--header">
                            <h4 class="chatbox__heading--header">Chat support</h4>
                            <p class="chatbox__description--header">There are many variations of passages of Lorem Ipsum available</p>
                        </div>
                    </div>
                    <div class="chatbox__messages">
                        <div>
                            <div class="messages__item messages__item--visitor">
                                Can you let me talk to the support?
                            </div>
                            <div class="messages__item messages__item--operator">
                                Sure!
                            </div>
                            <div class="messages__item messages__item--visitor">
                                Need your help, I need a developer in my site.
                            </div>
                            <div class="messages__item messages__item--operator">
                                Hi... What is it? I'm a front-end developer, yay!
                            </div>
                            <div class="messages__item messages__item--typing">
                                <span class="messages__dot"></span>
                                <span class="messages__dot"></span>
                                <span class="messages__dot"></span>
                            </div>
                        </div>
                    </div>
                    <div class="chatbox__footer">
                        <img src="https://raw.githubusercontent.com/isbatullah/chatbox/9f1110828acf2afed3743b0867cb5687cb2c6b19/images/icons/emojis.svg" alt="">
                        <img src="https://raw.githubusercontent.com/isbatullah/chatbox/9f1110828acf2afed3743b0867cb5687cb2c6b19/images/icons/microphone.svg" alt="">
                        <input type="text" placeholder="Write a message...">
                        <p class="chatbox__send--footer">Send</p>
                        <img src="https://raw.githubusercontent.com/isbatullah/chatbox/9f1110828acf2afed3743b0867cb5687cb2c6b19/images/icons/attachment.svg" alt="">
                    </div>
                </div>
                <div class="chatbox__button">
                    <button>button</button>
                </div>
            </div>
        </div>
    </body>
    </html>
    `;
  
    // JS code
    function embedChatWidget() {
      var styleElement = document.createElement('style');
      styleElement.innerHTML = widgetStyles;

      
      // Inject HTML
      var widgetContainer = document.createElement('div');
      widgetContainer.innerHTML = widgetHTML;
      document.body.appendChild(widgetContainer);
  
      class InteractiveChatbox {
        constructor(a, b, c) {
            this.args = {
                button: a,
                chatbox: b
            }
            this.icons = c;
            this.state = false; 
        }
    
        display() {
            const {button, chatbox} = this.args;
            
            button.addEventListener('click', () => this.toggleState(chatbox))
        }
    
        toggleState(chatbox) {
            this.state = !this.state;
            this.showOrHideChatBox(chatbox, this.args.button);
        }
    
        showOrHideChatBox(chatbox, button) {
            if(this.state) {
                chatbox.classList.add('chatbox--active')
                this.toggleIcon(true, button);
            } else if (!this.state) {
                chatbox.classList.remove('chatbox--active')
                this.toggleIcon(false, button);
            }
        }
    
        toggleIcon(state, button) {
            const { isClicked, isNotClicked } = this.icons;
            let b = button.children[0].innerHTML;
    
            if(state) {
                button.children[0].innerHTML = isClicked; 
            } else if(!state) {
                button.children[0].innerHTML = isNotClicked;
            }
        }
    }
    
    
    const chatButton = document.querySelector('.chatbox__button');
    const chatContent = document.querySelector('.chatbox__support');
    const icons = {
        isClicked: '</p>Chatting</p>',
        isNotClicked: '<p>Chat with us!</p>'
    }
    
    const chatbox = new InteractiveChatbox(chatButton, chatContent, icons);
    chatbox.display();
    chatbox.toggleIcon(false, chatButton);
    }
  
    // Call the function to embed the widget
    embedChatWidget();
  })();
