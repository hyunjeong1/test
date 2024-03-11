package com.ssafy.zipjoong.util.model;

import jakarta.persistence.Column;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.MappedSuperclass;
import lombok.Getter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDateTime;

@EntityListeners(AuditingEntityListener.class)
@MappedSuperclass
@Getter
public abstract class EntityDate {
    // 생성일
    @CreatedDate
    @Column(nullable = false, updatable = false)
    private LocalDateTime createAt;

    // 수정일
    @LastModifiedDate
    @Column(nullable = false, updatable = false)
    private LocalDateTime updateAt;

}
