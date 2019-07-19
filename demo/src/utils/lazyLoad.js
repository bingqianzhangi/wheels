import {Debounce} from './debounce';

export default function LazyLoad(el){
    this.el = el || window;
    this.init();
};

LazyLoad.prototype = {
    init(){
        let loadImg = Debounce(()=>{
            this.loadImg();
        })
        this.el.addEventListener('scroll', loadImg)
        this.loadImg();
    },
    loadImg(){
        let imgs = document.querySelectorAll('img[data-src]');
        imgs.forEach(item=>{
            // 先判断是否加载过
            if (item.src !== item.dataset.src){
                // 判断元素是否进入视口
                if (this.isIntoView(item)){
                    item.src = item.dataset.src;
                }
            }
        })
    },
    isIntoView(el){
        let rect = el.getBoundingClientRect();
        if (rect.top > 0 && rect.top < window.innerHeight && rect.left > 0 && rect.left < window.innerWidth){
            return true;
        }
        return false;
    }
}