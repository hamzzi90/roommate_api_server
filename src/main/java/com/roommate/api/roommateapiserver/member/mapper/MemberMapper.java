package com.roommate.api.roommateapiserver.member.mapper;


import com.roommate.api.roommateapiserver.member.dto.MemberDto;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.List;

/**
 * Created by soong on 2017. 11. 28..
 */

@Mapper
@Repository
public interface MemberMapper {
    public List<MemberDto> getMemberList();
    public HashMap<String,MemberDto> getMemberInfo(String user_id);
    public int setMemberInfo(MemberDto memberDto);
}
