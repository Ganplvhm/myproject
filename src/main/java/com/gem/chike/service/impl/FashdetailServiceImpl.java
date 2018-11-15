package com.gem.chike.service.impl;

import com.gem.chike.mapper.FashdetailMapper;
import com.gem.chike.pojo.Fashdetail;
import com.gem.chike.service.FashdetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FashdetailServiceImpl implements FashdetailService {
    @Autowired
    private FashdetailMapper fashdetailMapper;
    @Override
    public List<Fashdetail> selectcards(int fashionerId) {
      return fashdetailMapper.selectcards(fashionerId);
    }
}
