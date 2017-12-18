package com.roommate.api.roommateapiserver.member.dto;

import lombok.Data;

/**
 * Created by soong on 2017. 11. 28..
 */
@Data
public class MemberDto {

    private int member_no;
    private String user_id;
    private String user_name;
    private char sex;
    private String reg_dt;
    private String update_dt;

}
