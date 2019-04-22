
    window.onload = function(){
        //获取元素
        //1. 获取大盒子
        const oBigBox = $id('box');
        //2. 获取上半部
        const oTop = $id('top');
        // //3. 获取左遮罩
        // const oLeftMark = $id('left');
        // //4. 获取右遮罩
        // const oRightMark = $id('right');
        // //5. 获取左按钮
        // const oLeftBtn = $id('btn_l');
        // //6. 获取右按钮
        // const oRightBtn = $id('btn_r');
        //7. 获取所有的大图
        const oBigPic = oTop.getElementsByTagName('li');
        //8. 获取下半部
        const oBottom = $id('bottom');
        //9. 获取下半部中的ul
        const oSmallUl = $id('small_ul');
        //10. 获取所有的小图
        const oSmallPic = oBottom.getElementsByTagName('li');
        
        //11. 设置小图ul的宽度
        oSmallUl.style.width = oSmallPic[0].offsetWidth * oSmallPic.length + 'px';
        
        //添加事件
        
        // //12. 给左遮罩和左按钮同时添加移入事件
        // oLeftMark.onmouseenter = oLeftBtn.onmouseenter = function(){
        //     sport(oLeftBtn,{opacity : 100});
        // }
        // //13. 给左遮罩添加移出事件
        // oLeftMark.onmouseleave = function(){
        //     sport(oLeftBtn,{opacity : 0});
        // }
        // //14. 给右遮罩和右按钮同时添加移入事件
        // oRightMark.onmouseenter = oRightBtn.onmouseenter = function(){
        //     sport(oRightBtn,{opacity : 100});
        // }
        // //15. 给右遮罩添加移出事件
        // oRightMark.onmouseleave = function(){
        //     sport(oRightBtn,{opacity : 0});
        // }
        //16.1 声明一个控制轮播图片的下标
        let indexCur = 0;
        //16.2 声明控制大图轮播的zindex
        let zIndex = 1;
        //16.3 控制计时器变量
        let timer = null;
        slide();
        autoPlay();
        // //16. 给左按钮添加点击事件
        // oLeftBtn.onclick = function(){
        //     indexCur --;
        //     if(indexCur === -1){
        //         indexCur = oBigPic.length - 1;
        //     }
        //     slide();
        // }
        // //17. 给右按钮添加点击事件
        // oRightBtn.onclick = function(){
        //     indexCur ++;
        //     if(indexCur === oBigPic.length){
        //         indexCur = 0;
        //     }
        //     slide();
        // }
        //18. 给小图添加事件
        for(let i = 0,len = oSmallPic.length;i < len;i ++){
            //移入事件
            oSmallPic[i].onmouseenter = function(){
                sport(this,{opacity : 100});
            }
            //移出事件
            oSmallPic[i].onmouseleave = function(){
                if(i !== indexCur){
                    sport(this,{opacity : 50});
                }
            }
            //点击事件
            oSmallPic[i].onclick = function(){
                indexCur = i;
                slide();
            }
        }
        //19.设置轮播
        function slide(){
            //1.大图轮播
            oBigPic[indexCur].style.zIndex = ++ zIndex;
            //2.小图轮播
            /*if(indexCur === 0){
                sport(oSmallUl,{left : 0});
            }else if(indexCur === oSmallPic.length - 1){
                sport(oSmallUl,{left : -(oSmallPic.length - 3) * oSmallPic[0].offsetWidth})
            }else{
                sport(oSmallUl,{left : -(indexCur - 1) * oSmallPic[0].offsetWidth});
            }*/
            //3.初始化小图的透明度
            //让所有的小图半透明
            for(let i = 0,len = oSmallPic.length;i < len;i ++){
                sport(oSmallPic[i],{opacity : 50});
            }
            //让当前的小图不透明
            sport(oSmallPic[indexCur],{opacity : 100});
        }
        //20. 自动轮播
        function autoPlay(){
            timer = setInterval(function(){
                indexCur ++;
                if(indexCur === oBigPic.length){
                    indexCur = 0;
                }
                slide();
            },3000)
        }
        //21. 给大盒子添加移入移出事件
        oBigBox.onmouseenter = function(){
            clearInterval(timer);
        }
        oBigBox.onmouseleave = function(){
            autoPlay();
        }
    }
    function $id(id){
        return document.getElementById(id);
    }