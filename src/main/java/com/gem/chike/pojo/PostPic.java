package com.gem.chike.pojo;

public class PostPic {
    private int postpicid;
    private String postpics;
    private int postid;
    private int posterid;

    public PostPic() {
    }

    public PostPic(int postpicid, String postpics, int postid, int posterid) {
        this.postpicid = postpicid;
        this.postpics = postpics;
        this.postid = postid;
        this.posterid = posterid;
    }

    public int getPostpicid() {
        return postpicid;
    }

    public void setPostpicid(int postpicid) {
        this.postpicid = postpicid;
    }

    public String getPostpics() {
        return postpics;
    }

    public void setPostpics(String postpics) {
        this.postpics = postpics;
    }

    public int getPostid() {
        return postid;
    }

    public void setPostid(int postid) {
        this.postid = postid;
    }

    public int getPosterid() {
        return posterid;
    }

    public void setPosterid(int posterid) {
        this.posterid = posterid;
    }

    @Override
    public String toString() {
        return "PostPic{" +
                "postpicid=" + postpicid +
                ", postpics='" + postpics + '\'' +
                ", postid=" + postid +
                ", posterid=" + posterid +
                '}'+"\n";
    }
}
