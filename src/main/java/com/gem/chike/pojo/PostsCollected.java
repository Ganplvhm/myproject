package com.gem.chike.pojo;

public class PostsCollected {
    private int postConcernedId;
    private String postname;
    private String postssimpleintro;
    private String postpic;
    private String userName;
    private int postid;

    public int getPostid() {
        return postid;
    }

    public void setPostid(int postid) {
        this.postid = postid;
    }

    public PostsCollected() {
    }

    public PostsCollected(int postConcernedId, String postname, String postssimpleintro, String postpic, String userName) {
        this.postConcernedId = postConcernedId;
        this.postname = postname;
        this.postssimpleintro = postssimpleintro;
        this.postpic = postpic;
        this.userName = userName;
    }

    public int getPostConcernedId() {
        return postConcernedId;
    }

    public void setPostConcernedId(int postConcernedId) {
        this.postConcernedId = postConcernedId;
    }

    public String getPostname() {
        return postname;
    }

    public void setPostname(String postname) {
        this.postname = postname;
    }

    public String getPostssimpleintro() {
        return postssimpleintro;
    }

    public void setPostssimpleintro(String postssimpleintro) {
        this.postssimpleintro = postssimpleintro;
    }

    public String getPostpic() {
        return postpic;
    }

    public void setPostpic(String postpic) {
        this.postpic = postpic;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    @Override
    public String toString() {
        return "PostsCollected{" +
                "postConcernedId=" + postConcernedId +
                ", postname='" + postname + '\'' +
                ", postssimpleintro='" + postssimpleintro + '\'' +
                ", postpic='" + postpic + '\'' +
                ", userName='" + userName + '\'' +
                '}'+"\n";
    }
}
