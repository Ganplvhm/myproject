package com.gem.chike.pojo;

import java.util.List;

public class Topic {
    private int topicId;
    private int userId;
    private String topicIntro;
    private List<TopicPic> topicPics;
    private User user;

    public Topic() {
    }

    public Topic(int topicId, int userId, String topicIntro, List<TopicPic> topicPics, User user) {
        this.topicId = topicId;
        this.userId = userId;
        this.topicIntro = topicIntro;
        this.topicPics = topicPics;
        this.user = user;
    }

    public int getTopicId() {
        return topicId;
    }

    public void setTopicId(int topicId) {
        this.topicId = topicId;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getTopicIntro() {
        return topicIntro;
    }

    public void setTopicIntro(String topicIntro) {
        this.topicIntro = topicIntro;
    }

    public List<TopicPic> getTopicPics() {
        return topicPics;
    }

    public void setTopicPics(List<TopicPic> topicPics) {
        this.topicPics = topicPics;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    @Override
    public String toString() {
        return "Topic{" +
                "topicId=" + topicId +
                ", userId=" + userId +
                ", topicIntro='" + topicIntro + '\'' +
                ", topicPics=" + topicPics +
                ", user=" + user +
                '}';
    }
}
