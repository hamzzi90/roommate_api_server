package com.roommate.api.roommateapiserver.common.response;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;
import org.springframework.http.HttpStatus;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


@Data
@JsonInclude(JsonInclude.Include.NON_DEFAULT)
public class ResponseObject {


    // 실제 리턴될 데이터 Singl e Object : a single resource object, a single resource identifier object, or null
    // 실제 리턴될 데이터 Array Object : an array of resource objects, an array of resource identifier objects, or an empty array
    // 해당 데이터는 NULL인 경우가 아니면 생략하지 않음
    private Object data;

    // 응답에 포함될 비정형 데이터 : a meta object that contains non-standard meta-information.
    // 데이터가 NULL 또는 EMPTY 인경우는 생략처리됨
    private Object meta;

    // 정보요청을 위한 링크정보 : a string containing the link’s URL.
    private ResponseLink links = new ResponseLink();

    // 페이징 존재시 해당 정보의 기록용 사용 : choose to limit the number of resources returned in a response to a subset (“page”) of the whole set available.
    private ResponsePagination pagination = new ResponsePagination();

    // 에러관련 객체배열 : Error objects provide additional information about problems encountered while performing an operation
    private List<ResponseError> errors = new ArrayList<ResponseError>();

    // 하위버전 호환성 ( 출력에서는 제거 )
    @JsonIgnore
    private HttpStatus statusCode;

    // 하위버전 호환성 ( 출력에서는 제거 )
    @JsonIgnore
    private String status;


    /**
     * Object 데이터 대입 메소드
     * @param meta Object ( Meta Object )
     * @return void
     * @throws Exception
     */
    public void setResponseMeta( Object meta ){
        this.meta = meta;
    }

    /**
     * Object 데이터 대입 메소드
     * @param data Object ( Data Object )
     * @return void
     * @throws Exception
     */
    public void setResponseResult( Object data ){
        this.data = data;
    }


    /**
     * 데이터가 Map<String,Object> 인경우 데이터 추가함.
     * @param propertyName String ( HashMap<String,Object>의 해쉬명 )
     * @param data Object ( Data Object )
     * @return void
     * @throws Exception
     */
    public void addResponseDataMap( String propertyName, Object data ){
        if ( this.data instanceof Map) {
            Map<String, Object> _data = (Map<String, Object>) this.data;
            _data.put( propertyName, data );
        }
    }

    /**
     * 데이터가 List<?> 구조인 경우 추가함.
     * @param data Object ( Data Object )
     * @return void
     * @throws Exception
     */
    public void addResponseDataList( Object data ){
        if ( this.data instanceof List) {
            List<Object> _data = (List<Object>) this.data;
            _data.add( data );
        }
    }

    /**
     * 메타 데이터가 Map<String,Object> 인경우 데이터 추가함.
     * @param propertyName String ( HashMap<String,Object>의 해쉬명 )
     * @param meta Object ( Meta Object )
     * @return void
     * @throws Exception
     */
    public void addResponseMetaMap( String propertyName, Object meta ){
        if ( this.meta instanceof Map) {
            Map<String, Object> _meta = (Map<String, Object>) this.meta;
            _meta.put( propertyName, meta );
        }
    }


    /**
     * 메타 데이터가 List<?> 구조인 경우 추가함.
     * @param meta Object ( Data Object )
     * @return void
     * @throws Exception
     */
    public void addResponseMetaList( Object meta ){
        if ( this.meta instanceof List) {
            List<Object> _meta = (List<Object>) this.meta;
            _meta.add( meta );
        }
    }


    /**
     * ResponseLink Object를 links 에 설정함
     * @param link ResponseLink
     * @return void
     * @throws Exception
     */
    public void setLinks( ResponseLink link ){
        this.links = link;
    }

    /**
     * ResponseLink Object에 self로 URL Link 데이터를 설정함.
     * @param linkUrl String
     * @return void
     * @throws Exception
     */
    public void setLinkCurrent( String linkUrl ){
        this.getLinks().setCurrentLink( linkUrl );
    }

    /**
     * ResponseLink Object에 prev, next로 URL Link 데이터를 설정함.
     * @param prev String
     * @param next String
     * @return void
     * @throws Exception
     */
    public void setLinkPrevNext( String prev, String next ){
        this.getLinks().setPrevNext( prev, next);
    }

    /**
     * ResponseLink Object에 prev, self, next로 URL Link 데이터를 설정함.
     * @param prev String
     * @param self String
     * @param next String
     * @return void
     * @throws Exception
     */
    public void setLinkPrevNext( String prev, String self, String next ){
        this.getLinks().setPrevNext( prev, self, next);
    }

    /**
     * ResponseLink Object에 first, last URL Link 데이터를 설정함.
     * @param first String
     * @param last String
     * @return void
     * @throws Exception
     */
    public void setLinkFirstLast( String first, String last ){
        this.getLinks().setFirstLast( first, last );
    }


    /**
     * ResponsePagination Object를 pagination 변수에 저장함
     * @param pagination ResponsePagination
     * @return void
     * @throws Exception
     */
    public void setPagination( ResponsePagination pagination ){
        this.pagination = pagination;
    }

    /**
     * ResponsePagination Object에 Offset 기반의 페이지 데이터를 저장
     * @param offset int
     * @param limit int
     * @param totalCount int
     * @return void
     * @throws Exception
     */
    public void setPaginationForOffsetBase( int offset, int limit, int totalCount ){
        this.getPagination().setOffsetBase( offset, limit, totalCount );
    }

    /**
     * ResponsePagination Object에 Page 기반의 페이지 데이터를 저장
     * @param page int
     * @param perPage int
     * @param totalPage int
     * @return void
     * @throws Exception
     */
    public void setPaginationForPageBase( int page, int perPage, int totalPage ){
        this.getPagination().setPageBase( page, perPage, totalPage );
    }


    /**
     * ResponseError Object를 기존 errors 에 추가함.
     * @param error ResponseError
     * @return void
     * @throws Exception
     */
    public void addResponseError( ResponseError error ){
        this.errors.add(error);
    }


    /**
     * List<ResponseError> Object를 기존 errors 에 할당하여 대입함.
     * @param errors List<ResponseError>
     * @return void
     * @throws Exception
     */
    public void setResponseError(List<ResponseError> errors){
        this.errors = errors;
    }


    /**
     * 기존 사용중이던 ResponseObject 의 호환성을 위한 메소드
     * @param statusCode ( HttpStatus )
     * @param version String ( v1.0 )
     * @param data Object ( 실제 리턴될 데이터 )
     * @return void
     * @throws Exception
     */
    public void setResponseObject(HttpStatus statusCode, String version, Object data ){

        this.setData(data);
        this.setStatusCode(statusCode);
        this.setVersionToMeta(version);

    }

    /**
     * 기존 사용중이던 ResponseObject 의 호환성을 위한 메소드
     * @param statusCode ( HttpStatus )
     * @param version String ( v1.0 )
     * @return void
     * @throws Exception
     */
    public void setResponseObject(HttpStatus statusCode, String version ){

        this.setStatusCode(statusCode);
        this.setVersionToMeta(version);

    }

    /**
     * 기존 사용중이던 ResponseObject 의 호환성을 위한 메소드
     * @param statusCode ( HttpStatus )
     * @param version String ( v1.0 )
     * @param title String ( 에러제목 )
     * @param detail String ( 에러상세내용 )
     * @return void
     * @throws Exception
     */
    public void setFailure(HttpStatus statusCode, String version, String title, String detail ){

        this.setStatusCode(statusCode);
        this.setVersionToMeta(version);
        this.errors.add( new ResponseError( statusCode, title, detail ));

    }


    // 버전을 메타로 저장하기 위한 내부 메소드
    private void setVersionToMeta( String version ){

        if( null == version || version.trim().length() == 0 ){
            return;
        }
        if( null == this.meta){
            HashMap<String,Object> _meta = new HashMap<String,Object>();
            _meta.put("version", version);
            this.setMeta( _meta);
        } else if ( this.meta instanceof Map) {
            this.addResponseMetaMap( "version", version );
        } else if( this.meta instanceof List ){
            HashMap<String,Object> _meta = new HashMap<String,Object>();
            _meta.put("version", version);
            this.addResponseMetaList( _meta );
        }
    }




}
