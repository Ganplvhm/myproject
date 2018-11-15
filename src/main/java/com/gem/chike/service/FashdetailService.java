package com.gem.chike.service;

import com.gem.chike.pojo.Fashdetail;

import java.util.List;

public interface FashdetailService {
    List<Fashdetail> selectcards(int fashionerId);
}
