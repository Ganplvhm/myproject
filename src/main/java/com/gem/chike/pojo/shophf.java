package com.gem.chike.pojo;

public class shophf {

    private String hfName;
    private  String hfTime;
    private  String hfContent;
    private  String atName;



    public String getHfName() {
        return hfName;
    }

    public void setHfName(String hfName) {
        this.hfName = hfName;
    }

    public String getHfContent() {
        return hfContent;
    }

    public void setHfContent(String hfContent) {
        this.hfContent = hfContent;
    }





    public String getAtName() {
        return atName;
    }

    public void setAtName(String atName) {
        this.atName = atName;
    }

    public String getHfTime() {
        return hfTime;
    }

    public void setHfTime(String hfTime) {
        this.hfTime = hfTime;
    }

    public shophf( String hfName, String hfTime, String hfContent,  String atName) {
        this.hfName = hfName;
        this.hfContent = hfContent;
        this.atName = atName;
        this.hfTime = hfTime;
    }

    public shophf() {
    }

    @Override
    public String toString() {
        return "shophf{" +
                "hfName='" + hfName + '\'' +
                ", hfTime='" + hfTime + '\'' +
                ", hfContent='" + hfContent + '\'' +
                ", atName='" + atName + '\'' +
                '}';
    }
}
