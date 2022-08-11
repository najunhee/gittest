/**
 * div를 기본 태그로 설정한 Element를 생성하는 컴포넌트
 */
export default class Dom {

    /**
     * div Element 하나를 생성하고 this._dom 변수에 지정한다
     */
    constructor() {
        this._dom = document.createElement("div");
    }

    /**
     * this._dom 변수를 리턴하는 getter 함수
     */
    get dom() {
        return this._dom;
    }

    /**
     * this._dom 변수를 지정하는 setter 함수
     */
    set dom(newDom) {
        if (newDom instanceof Element) {
            this._dom = newDom;
        } else {
            throw new Error("parameter is not an Element");
        }
    }

    /**
     * dom Element의 id를 지정하는 setter 함수
     */
    set id(new_id) {
        this.dom.id = new_id;
    }

    /**
     * dom Element의 id를 리턴하는 getter 함수
     */
    get id() {
        return this.dom.id ? this.dom.id : null;
    }

    /**
     * dom Element의 class를 지정하는 setter 함수
     */
    set class(new_class) {
        this.dom.className = new_class;
    }

    /**
     * dom Element의 class를 리턴하는 getter 함수
     */
    get class() {
        return this.dom.className ? this.dom.className : null;
    }

    /**
     * dom Element안에 파라미터를 집어넣는 setter 함수
     */
    set render(inner) {
        this.dom.innerHTML = inner;
    }

    /**
     * dom Element안의 innerHTML을 리턴하는 getter 함수
     */
    get render() {
        return this.dom.innerHTML;
    }

    /**
     * Object 형태의 css 상수를 태그의 style에 맞게 변형시켜주는 함수
     */
    convertCss = (css) => {
        const styleString = (
            Object.entries(css).map(([k, v]) => `${k}:${v}`).join(';')
        );

        return styleString;
    }

    /**
     * dom Element를 파라미터인 parent안에 집어넣는 함수
     */
    append(parent) {
        if (parent instanceof Element) {
            parent.appendChild(this.dom);
        } else {
            throw new Error("parent parameter is not an Element");
        }
    }

    /**
     * dom Element를 삭제하는 함수
     */
    delete = () => {
        this.dom.remove();
    }

    /**
     * dom Element에 이벤트를 추가하는 함수
     * 
     * @param {String} Listen 할 이벤트
     * @param {Function} 이벤트 발동시 실행할 콜백함순 
     */
    addEvent = (event, callback) => {
        this.dom.addEventListener(event, (ev) => {
            callback(ev);
        })
    }

    /**
     * dom Element의 margin 설정
     * @param {String} smargin margin String (top, right, bottom, left 형식)
     */
    setMargin = (smargin) => {
        this.dom.style.margin = smargin;
    }
}