import React from "react";
import '../css/CusVideo.scss'

export interface HelloProps { compiler: string; framework: string; }

export class CusVideo extends React.Component<HelloProps, {}> {

    constructor(props:any) {
        super(props)

        this.onEndVideo = this.onEndVideo.bind(this)
    }

    componentDidMount() {
        var video=document.querySelector('.optionMain-player') as HTMLVideoElement;//获取video
        var playBtnBox=document.querySelector('.playBtn-box') as HTMLDivElement;
        var video_btn=document.querySelector('.playBtn') as HTMLDivElement;//获取播放按钮
        var vc_time_start=document.querySelector('.vc-time-start') as HTMLDivElement;//获取时间容器
        var vc_time_end=document.querySelector('.vc-time-end') as HTMLDivElement;
        var vc_bar=document.querySelector('.vc-bar') as HTMLDivElement;//获取进度条
        var current_bar=document.querySelector('.vc-bar-current') as HTMLDivElement;
        var that=this;
        video.ondurationchange=function() {
            // 给播放按钮绑定事件
            that.bindPlayEvent(video,video_btn,playBtnBox);
            // 设置视频时间
            that.setTime(video,vc_time_start,vc_time_end);
            // 设置静音
            that.setVolume(video);
            // 设置进度条
            that.setBar(video,vc_bar,current_bar);
            // // 播放时改变时间和进度条
            that.changeBarAndTime(video,vc_time_start,vc_time_end,vc_bar,current_bar);
            // // 进度条点击事件
            that.clickBar(video,vc_bar);
        }
    }
    bindPlayEvent(video:HTMLVideoElement,video_btn:HTMLDivElement,playBtnBox:HTMLDivElement){
        var that=this;
        playBtnBox.onclick=function(){
            if(video.paused){
                video.play();
                video_btn.hidden = true
            }else{
                video.pause();
                video_btn.hidden = false
            }
        }
    }
    setTime(video:HTMLVideoElement,start:HTMLDivElement,end:HTMLDivElement){
        var total_time=Math.round(video.duration);//视频时长，单位秒
        var cur_time=Math.round(video.currentTime);//视频当前播放时长，单位秒
        var mi=Math.floor(Math.round(video.duration)/60);//计算视频分钟数
        var cur_mi=Math.floor(cur_time/60);//计算视频当前播放分钟数
        start.innerHTML=cur_mi+':'+(cur_time-cur_mi*60);
        end.innerHTML = mi+':'+(total_time-mi*60)
    }
    setVolume(video:HTMLVideoElement){
        var that=this;
        // document.querySelector(this.config.vc_muted).onclick=function(){
        //     video.muted=!video.muted;
        //     if(video.muted){
        //         this.setAttribute('class',that.config.vc_muted.slice(1)+' muted');
        //     }else{
        //         this.setAttribute('class',that.config.vc_muted.slice(1));
        //     }
        // }
    }
    setBar(video:HTMLVideoElement,vc_bar:HTMLDivElement,current_bar:HTMLDivElement) {
        // current_bar.setAttribute('style','width:'+video.currentTime/video.duration*100+'%')
        current_bar.style.width = video.currentTime/video.duration*100+'%'
    }
    changeBarAndTime(video:HTMLVideoElement,vc_time_start:HTMLDivElement,vc_time_end:HTMLDivElement,vc_bar:HTMLDivElement,current_bar:HTMLDivElement){
        var that=this;
        video.ontimeupdate=function(){
            // 改变时间
            that.setTime(video,vc_time_start,vc_time_end);
            //改变进度条
            that.setBar(video,vc_bar,current_bar);
        }
    }
    clickBar(video:HTMLVideoElement,vc_bar:HTMLDivElement){
        var vc_bar_width=vc_bar.clientWidth;
        var flag=false;
        vc_bar.onclick=function(e:any){
            var x=e.offsetX||e.layerX;
            video.currentTime=Math.round(x/vc_bar_width*video.duration);
        }
        document.body.onmousedown=function(e){
            flag=true;
        }
        document.body.onmouseup=function(){
            flag=false;
        }
        vc_bar.onmousemove=function(e:any){
            if(flag){
                var x=e.offsetX||e.layerX;
                video.currentTime=Math.round(x/vc_bar_width*video.duration);
            }
        }
    }
    onEndVideo(e:any) {
        // e.target.webkitExitFullScreen()
        // const vid:HTMLVideoElement = document.querySelector('.optionMain-player')
        // vid.src = ''
        // vid.src = this.m610011Res.url
        console.log(e)
    }
    btnScreen(e:any) {
        if (e.target.requestFullscreen) {
            e.target.requestFullscreen()
        }else if (e.target.webkitRequestFullScreen) {
            e.target.webkitRequestFullScreen();
        }
    }
    render() {
        return (
            <div>
                <div style={{height:'100px'}}>
                    头部
                </div>
                <div className="CusVideo">
                    <video className="optionMain-player" preload="metadata"
                        width="100%" height="160px" 
                        poster={""} src={"https://media.w3.org/2010/05/sintel/trailer_hd.mp4"}
                        onEnded={this.onEndVideo}
                    >
                    </video>
                    <div className="video-controls">
                        <div className="playBtn-box">
                            <div className="playBtn">
                                <div></div>
                            </div>
                        </div>
                        <div className="vc-time-muted-bar">
                            <div className="vc-time-start">0:00</div>
                            {/* <div className="vc-muted">静音</div> */}
                            <div className="vc-bar">
                                <div className="vc-bar-current"></div>
                            </div>
                            <div className="vc-time-end">0:00</div>
                            <button className="vc-screen" onClick={this.btnScreen.bind(this)}>全屏</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}