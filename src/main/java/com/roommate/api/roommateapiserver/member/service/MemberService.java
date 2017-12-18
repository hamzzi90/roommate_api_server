package com.roommate.api.roommateapiserver.member.service;

import com.roommate.api.roommateapiserver.member.dto.MemberDto;

import java.util.HashMap;
import java.util.List;

/**
 * Created by soong on 2017. 11. 28..
 */

public interface MemberService {

    /**
     * 회원리스트
     *
     * @return List<MemberDto>
     * @throws Exception
     */
    public List<MemberDto> getMemberList();


    /**
     * 회원리스트
     *
     * @return List<MemberDto>
     * @throws Exception
     */
    public HashMap<String,MemberDto> getMemberInfo(String user_id);


    /**
     * 회원리스트
     *
     * @return List<MemberDto>
     * @throws Exception
     */
    public HashMap<String,Object> setMemberInfo(MemberDto memberDto);

}
