(function() {
    // HTML code
    var widgetHTML = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;0,600;1,300&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="./assets/css/chat.css">
        <link rel="stylesheet" href="./assets/css/style.css">
        <link rel="stylesheet" href="./assets/css/typing.css">
        <title>Chatbox</title>
    </head>
    <body>
        <div class="container">
            <div class="chatbox">
                <div class="chatbox__support">
                    <div class="chatbox__header">
                        <div class="chatbox__image--header">
                            <img src="./images/image.png" alt="image">
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
                        <img src="./images/icons/emojis.svg" alt="">
                        <img src="./images/icons/microphone.svg" alt="">
                        <input type="text" placeholder="Write a message...">
                        <p class="chatbox__send--footer">Send</p>
                        <img src="./images/icons/attachment.svg" alt="">
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