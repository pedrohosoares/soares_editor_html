let soares_editor = {

    editor:document.querySelectorAll('.editor'),
    buttons:{
        'p':{
            name:'p',
            attribute:false
        },
        'h1':{
            name:'h1',
            attribute:false
        },
        'h2':{
            name:'h2',
            attribute:false
        },
        'h3':{
            name:'h3',
            attribute:false
        },
        'h4':{
            name:'h4',
            attribute:false
        },
        'h5':{
            name:'h5',
            attribute:false
        },
        'h6':{
            name:'h6',
            attribute:false
        },
        'span':{
            name:'span',
            attribute:false
        },
        'block':{
            name:'block',
            attribute:false
        },
        'img':{
            name:'img',
            attribute:false
        },
        'br':{
            name:'Break-line',
            attribute:false
        }
    },
    loadEditor(){
        
        this.editor.forEach((tagHTML,index_tag)=>{
            
            for(let button in soares_editor.buttons){
                
                let new_element = document.createElement('button');
                new_element.innerText = soares_editor.buttons[button].name;
                tagHTML.appendChild(new_element);
                
                new_element.onclick = (e)=>{
                    
                    let tag = document.createElement(button);
                    tag.style.border = "1px solid #CCC";
                    tag.setAttribute('contenteditable',true);
                    tagHTML.appendChild(tag);

                }


            }
            //let button = document.createElement('');

        });


    },
    init(){
        this.loadEditor();
    }

};
soares_editor.init();