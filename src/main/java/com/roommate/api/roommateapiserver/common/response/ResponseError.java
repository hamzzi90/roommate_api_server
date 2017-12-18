package com.roommate.api.roommateapiserver.common.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.http.HttpStatus;


@Data
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_DEFAULT)
public class ResponseError {

    // HttpStatus 코드의 데이터, 여러에러의 복합이면 가장 일반적인 코드 사용
    // the HTTP status code applicable to this problem, expressed as a string value. ( When a server encounters multiple problems for a single request, the most generally applicable HTTP error code SHOULD be used in the response )
    private String status;

    // 각각의 Application에서 사용할 별도의 코드 : an application-specific error code, expressed as a string value
    private String code;

    // 에러의 제목 : a short, human-readable summary of the problem
    private String title;

    // 에러의 상세내용 : a human-readable explanation specific to this occurrence of the problem. Like title, this field’s value can be localized.
    private String detail;

    // 해당 발생에러에 대한 상세정보 : an object containing references to the source of the error, optionally including any of the following members
    private ResponseErrorSource source = new ResponseErrorSource();

    // 비정형적인 참조 데이터 : a meta object containing non-standard meta-information about the error.
    private Object meta;


    public void setStatus( HttpStatus status ){
        this.status = String.valueOf( status.value() );
    }

    public void setStatus( int status ) {
        this.status = String.valueOf(status);
    }

    public void setStatus( String status ){
        this.status = status;
    }

    public ResponseError( String status, String title, String detail ){
        this.status = status;
        this.title = title;
        this.detail = detail;
    }

    public ResponseError(HttpStatus status, String title, String detail ){
        this.status = String.valueOf( status.value() );
        this.title = title;
        this.detail = detail;
    }

    public void setErrorSource( String pointer, String parameter ){
        this.getSource().setResponseErrorSource( pointer, parameter );
    }

    public void setErrorSourcePointer( String pointer ){
        this.getSource().setPointer( pointer );
    }


    public void setErrorSourceParameter( String parameter ){
        this.getSource().setParameter( parameter );
    }

    // 지정한 HttpStatus.status 코드로 에러의 명칭을 title에 생성하여 등록
    public boolean generateErrorTitle(){

        try {
            // 설명미입력시 HttpStatus의 명칭으로 title의 값을 대신함
            this.title = HttpStatus.valueOf(Integer.parseInt(this.status)).getReasonPhrase();
        } catch ( NumberFormatException ne ){
            this.title = "";
            return false;
        } catch( IllegalArgumentException ie ){
            this.title = "";
            return false;
        }

        return true;
    }


}
