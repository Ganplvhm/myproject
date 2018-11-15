package com.gem.chike.pojo;

public class UserPosts {
    private int userPostId;
    private String userPostTitle;
    private String userPostContent;
    private String userPostImg;
    private String userName;
    private String userPostSimpleContent;

    public UserPosts() {
    }

    public UserPosts(int userPostId, String userPostTitle, String userPostContent, String userPostImg, String userName, String userPostSimpleContent) {
        this.userPostId = userPostId;
        this.userPostTitle = userPostTitle;
        this.userPostContent = userPostContent;
        this.userPostImg = userPostImg;
        this.userName = userName;
        this.userPostSimpleContent = userPostSimpleContent;
    }

    public String getUserPostSimpleContent() {
        return userPostSimpleContent;
    }

    public void setUserPostSimpleContent(String userPostSimpleContent) {
        this.userPostSimpleContent = userPostSimpleContent;
    }

    public int getUserPostId() {
        return userPostId;
    }

    public void setUserPostId(int userPostId) {
        this.userPostId = userPostId;
    }

    public String getUserPostTitle() {
        return userPostTitle;
    }

    public void setUserPostTitle(String userPostTitle) {
        this.userPostTitle = userPostTitle;
    }

    public String getUserPostContent() {
        return userPostContent;
    }

    public void setUserPostContent(String userPostContent) {
        this.userPostContent = userPostContent;
    }

    public String getUserPostImg() {
        return userPostImg;
    }

    public void setUserPostImg(String userPostImg) {
        this.userPostImg = userPostImg;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    @Override
    public String toString() {
        return "UserPosts{" +
                "userPostId=" + userPostId +
                ", userPostTitle='" + userPostTitle + '\'' +
                ", userPostContent='" + userPostContent + '\'' +
                ", userPostImg='" + userPostImg + '\'' +
                ", userName='" + userName + '\'' +
                '}'+"\n";
    }
}
