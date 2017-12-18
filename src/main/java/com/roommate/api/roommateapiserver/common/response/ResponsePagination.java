package com.roommate.api.roommateapiserver.common.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;


@Data
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class ResponsePagination {

    // 시작카운트
    private Integer offset;
    // 한페이지의 수량 카운트
    private Integer limit;
    // 전체 카운트 건수
    private Integer totalCount;

    // 요청 페이지
    private Integer page;
    // 페이지당 수량
    private Integer perPage;
    // 전체 페이지 건수
    private Integer totalPage;

    public void setOffsetBase( int offset, int limit, int totalCount ){
        this.offset = offset;
        this.limit = limit;
        this.totalCount = totalCount;
    }

    public void setPageBase( int page, int perPage, int totalPage ){
        this.page = page;
        this.perPage = perPage;
        this.totalPage = totalPage;
    }

}
