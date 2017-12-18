package com.roommate.api.roommateapiserver.member.service.impl;

import com.roommate.api.roommateapiserver.member.dto.MemberDto;
import com.roommate.api.roommateapiserver.member.mapper.MemberMapper;
import com.roommate.api.roommateapiserver.member.service.MemberService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;

/**
 * Created by soong on 2017. 11. 28..
 */
@Service(value = "MemberService")
public class MemberServiceImpl implements MemberService{

    private static final Logger logger = LoggerFactory.getLogger(MemberServiceImpl.class);

    @Autowired
    private MemberMapper memberMapper;

    @Override
    public List<MemberDto> getMemberList() {
        return memberMapper.getMemberList();
    }

    @Override
    public HashMap<String,MemberDto> getMemberInfo(String user_id) {
        return memberMapper.getMemberInfo(user_id);
    }

    /**
     * 회원리스트
     *
     * @param memberDto
     * @return List<MemberDto>
     * @throws Exception
     */
    @Override
    public HashMap<String, Object> setMemberInfo(MemberDto memberDto) {

        HashMap<String,MemberDto> overlapCheck = memberMapper.getMemberInfo(memberDto.getUser_id());

        HashMap<String, Object> setMemberInfo = new HashMap<>();

        if(overlapCheck.isEmpty()){
            setMemberInfo.put("resultMsg", "이미 존재하는 user_id 입니다.");
        }else{
            memberDto.setMember_no(memberMapper.setMemberInfo(memberDto));

            setMemberInfo.put("resultMsg", "이미 존재하는 user_id 입니다.");
            setMemberInfo.put("user_info", memberDto);

        }


        return setMemberInfo;
    }


}
