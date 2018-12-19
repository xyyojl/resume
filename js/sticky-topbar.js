!function(){
    var view = document.querySelector('#navTopBar')
    var controller = {
        view : null,
        init: function(view){
            this.view = view;
            this.bindEvents.call(this)
            // this.bindEvents()
        },
        bindEvents: function(){
            var view = this.view
            window.addEventListener('scroll',(x)=>{
                if (window.scrollY > 0) {
                    this.active()
                } else {
                    this.deactive()
                }
            })
            //箭头函数没有 this
        },
        active: function(){
            this.view.classList.add('sticky')
        },
        deactive: function(){
            this.view.classList.remove('sticky')
        }
    }
    controller.init.call(controller,view)
    // controller.init(view)
}.call()