package com.gem.chike.pojo;

import java.util.Date;

public class News {
    private String id;
    private String title;
    private String content;
    private Date createTime;
    private String userName;
    private String userpostSrc;

    public News() {
    }

    public News(String id, String title, String content, Date createTime) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.createTime = createTime;
    }

    public String getUserpostSrc() {
        return userpostSrc;
    }

    public void setUserpostSrc(String userpostSrc) {
        this.userpostSrc = userpostSrc;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }
}
