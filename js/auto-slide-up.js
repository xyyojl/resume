!function(){
    let specialTags = document.querySelectorAll("[data-x]");
    for (var i = 1; i < specialTags.length; i++) {
        specialTags[i].classList.add('offset')
    }
    setTimeout(function() {
        findCloseAndRemoveOffset();
    }, 1000)
    window.addEventListener('scroll',function(){
        findCloseAndRemoveOffset()
    })

    /* helper */
    function findCloseAndRemoveOffset() {
        let specialTags = document.querySelectorAll("[data-x]");
        let minIndex = 0;
        for (var i = 1; i < specialTags.length; i++) {
            if (Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)) {
                minIndex = i;
            }
        }
        // minIndex就是离窗口顶部最近的元素的索引
        specialTags[minIndex].classList.remove('offset')
        let id = specialTags[minIndex].id
        let a = document.querySelector('a[href="#' + id + '"]')
        let li = a.parentNode;
        let brotherAndMe = li.parentNode.children;
        for (let i = 0; i < brotherAndMe.length; i++) {
            brotherAndMe[i].classList.remove('highlight')
        }
        li.classList.add('highlight')
    }
    let liTags = document.querySelectorAll("nav.menu > ul > li");
    for (let i = 0; i < liTags.length; i++) {
        liTags[i].onmouseenter = function(x) {
            x.currentTarget.classList.add('active')
        }
        liTags[i].onmouseleave = function(x) {
            x.currentTarget.classList.remove('active')
        }
    }
}.call()