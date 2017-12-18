package com.roommate.api.roommateapiserver.member.controller;

import com.roommate.api.roommateapiserver.common.response.ResponseError;
import com.roommate.api.roommateapiserver.common.response.ResponseObject;
import com.roommate.api.roommateapiserver.member.dto.MemberDto;
import com.roommate.api.roommateapiserver.member.service.MemberService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;

/**
 * Created by soong on 2017. 11. 28..
 */
@RestController
public class MemberController {

    private static final Logger logger = LoggerFactory.getLogger(MemberController.class);

    @Autowired
    MemberService memberService;

    /**
     * 회원 List API Spec
     *
     * @param apiVersion
     * @param
     * @return
     * @throws Exception
     */
    @RequestMapping(value = "/{apiVersion}/member", method = RequestMethod.GET)
    public ResponseEntity<?> getMemberList(@PathVariable("apiVersion") String apiVersion) throws Exception {
        //apiVersion : API Versioning 용도
        return new ResponseEntity(memberService.getMemberList(), HttpStatus.OK);
    }

    /**
     * 회원 Info API Spec
     *
     * @param apiVersion
     * @param user_id
     * @return
     * @throws Exception
     */
    @RequestMapping(value = "/{apiVersion}/member/{user_id}", method = RequestMethod.GET)
    public ResponseEntity<?> getMemberInfo(@PathVariable("apiVersion") String apiVersion, @PathVariable(name = "user_id", required = true) String user_id) throws Exception {
        //apiVersion : API Versioning 용도

        if (user_id == null || user_id.equals("")) {
            ResponseError _error = new ResponseError();
            _error.setStatus(404);
            _error.setTitle("Invalid Request Parameter");
            _error.setDetail("user_id is required parameter.");

            ResponseObject responseValue = new ResponseObject();
            responseValue.addResponseError(_error);

            logger.error("fields value : {} / message = {} / detail = {}", user_id, _error.getTitle(), _error.getDetail());
            return new ResponseEntity<>(responseValue, HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity(memberService.getMemberInfo(user_id), HttpStatus.OK);
    }


    /**
     * Sets member.
     *
     * @param apiVersion the api version
     * @param memberDto  the member dto
     * @return the member
     * @throws Exception the exception
     */
    @RequestMapping(value = "{apiVersion}/member", method = RequestMethod.POST)
    public ResponseEntity<?> setMember(@PathVariable("apiVersion") String apiVersion, MemberDto memberDto) throws Exception{

        logger.info("setMember memberDto : {} / ", memberDto);

        HashMap<String, Object> resultInfo = memberService.setMemberInfo(memberDto);
//        if(resultInfo.get("user_info").)
        return new ResponseEntity(resultInfo, HttpStatus.OK);
    }
}
