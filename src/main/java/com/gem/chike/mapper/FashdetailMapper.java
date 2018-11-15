package com.gem.chike.mapper;

import com.gem.chike.pojo.Fashdetail;

import java.util.List;

public interface FashdetailMapper {
    List<Fashdetail> selectcards(int fashionerId);
}
