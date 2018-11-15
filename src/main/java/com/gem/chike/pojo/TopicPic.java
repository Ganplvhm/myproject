package com.gem.chike.pojo;

public class TopicPic {
    private int topicPicId;
    private String topicPic;
    private int topicId;

    public TopicPic() {
    }

    public TopicPic(int topicPicId, String topicPic, int topicId) {
        this.topicPicId = topicPicId;
        this.topicPic = topicPic;
        this.topicId = topicId;
    }

    public int getTopicPicId() {
        return topicPicId;
    }

    public void setTopicPicId(int topicPicId) {
        this.topicPicId = topicPicId;
    }

    public String getTopicPic() {
        return topicPic;
    }

    public void setTopicPic(String topicPic) {
        this.topicPic = topicPic;
    }

    public int getTopicId() {
        return topicId;
    }

    public void setTopicId(int topicId) {
        this.topicId = topicId;
    }

    @Override
    public String toString() {
        return "TopicPic{" +
                "topicPicId=" + topicPicId +
                ", topicPic='" + topicPic + '\'' +
                ", topicId=" + topicId +
                '}';
    }
}
