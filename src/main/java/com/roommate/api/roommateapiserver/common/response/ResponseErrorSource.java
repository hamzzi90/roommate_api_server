package com.roommate.api.roommateapiserver.common.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class ResponseErrorSource {

    // 해당 에러가 발생한 위치 또는 URL등의 메타정보 : a JSON Pointer [RFC6901] to the associated entity in the request document
    private String pointer;

    // 해당 에러가 발생하는 파라미터 데이터 : a string indicating which URI query parameter caused the error.
    private String parameter;

    public void setResponseErrorSource( String pointer, String parameter ){
        this.parameter = parameter;
        this.pointer = pointer;
    }


}
