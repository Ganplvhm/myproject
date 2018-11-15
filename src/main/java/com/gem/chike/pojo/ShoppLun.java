package com.gem.chike.pojo;

public class ShoppLun {
    private String userName;
    private String pingLun;
    private String userLogoSrc;
    private String pinluntime ;

    public ShoppLun(String userName, String pingLun,String userLogoSrc,String pinluntime) {
        this.userName = userName;
        this.pingLun = pingLun;
        this.userLogoSrc=userLogoSrc;
        this.pinluntime=pinluntime;
    }

    public ShoppLun() {
    }

    public String getTime() {
        return pinluntime;
    }

    public void setTime(String time) {
        this.pinluntime = time;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPingLun() {
        return pingLun;
    }

    public void setPingLun(String pingLun) {
        this.pingLun = pingLun;
    }

    public String getUserLogoSrc() {
        return userLogoSrc;
    }

    public void setUserLogoSrc(String userLogoSrc) {
        this.userLogoSrc = userLogoSrc;
    }

    @Override
    public String toString() {
        return "ShoppLun{" +
                "userName='" + userName + '\'' +
                ", pingLun='" + pingLun + '\'' +
                ", userLogoSrc='" + userLogoSrc + '\'' +
                ", pinluntime='" + pinluntime + '\'' +
                '}';
    }
}
