import React from 'react';
import './mainlist.less';

interface articleListType {
  id: number,
  img_src: string,
  title: string,
  article_src: string,
  des: string,
  [propName: string]: any
}
interface Prop {
  selectedMenuItem: any
}
interface State {
  article_list: articleListType[]
}

class MainList extends React.Component<Prop, State> {
  constructor (props: Prop) {
    super(props);
    this.state = {
      article_list: [
        {
          id: 1,
          img_src: 'http://pic22.nipic.com/20120620/9644879_220135570113_2.jpg',
          title: '使用Puppeteer提供网页转pdf及整页截图服务',
          article_src: 'infoq.cn',
          des: '最近需要为x浏览器 提供一个网页转PDF的服务，鉴于X浏览器定位是一个简洁轻便的手机浏览器产'
        },
        {
          id: 2,
          img_src: 'http://pic22.nipic.com/20120620/9644879_220135570113_2.jpg',
          title: 'webpack中如何使用iconfont字体图标',
          article_src: 'infoq.cn',
          des: '最近需要为x浏览器 提供一个网页转PDF的服务，鉴于X浏览器定位是一个简洁轻便的手机浏览器产'
        },
        {
          id: 3,
          img_src: 'http://pic22.nipic.com/20120620/9644879_220135570113_2.jpg',
          title: '开发一个高质量的前端组件，这些姿势一定要知道-InfoQ',
          article_src: 'infoq.cn',
          des: '最近需要为x浏览器 提供一个网页转PDF的服务，鉴于X浏览器定位是一个简洁轻便的手机浏览器产'
        },
        {
          id: 4,
          img_src: 'http://pic22.nipic.com/20120620/9644879_220135570113_2.jpg',
          title: 'webpack中如何使用iconfont字体图标',
          article_src: 'infoq.cn',
          des: '最近需要为x浏览器 提供一个网页转PDF的服务，鉴于X浏览器定位是一个简洁轻便的手机浏览器产aaaaaaaaaaaaaaaaaaaaaaa'
        }
      ]
    }
  };
  clickItemTool = (item: articleListType) => {
    console.log(item)
  };
  render() {
    let articleList = this.state.article_list;
    return (
      <div className={`main-list`}>
        <div className={`main-selected-title`}>
          {this.props.selectedMenuItem.menu_name}
        </div>
        <div className="main-list-wrap">
          {articleList.map((item: articleListType) => {
            return (
              <div className="main-list-item" key={item.id}>
                <div className="img-wrap">
                  <img src={item.img_src} alt={item.article_src}/>
                </div>
                <div className="title-wrap">
                  <div className="title-text">{item.title}</div>
                  <div className="article-source">{item.article_src}</div>
                </div>
                <div className="des-wrap">
                  <div className="des-text">{item.des}</div>
                </div>
                <div className="item-tool-wrap">
                  <div className="item-tool">
                    {}
                    <i className="iconfont icon-shenglvehao" onClick={() => {this.clickItemTool(item)}}></i>
                    <div className="item-toolbar">
                      <i className="iconfont icon-shanchu2 icon-gray" onClick={() => {this.clickItemTool(item)}}></i>
                      <i className="iconfont icon-fenxiang icon-gray" onClick={() => {this.clickItemTool(item)}}></i>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default MainList;