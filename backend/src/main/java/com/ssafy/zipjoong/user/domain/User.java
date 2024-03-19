package com.ssafy.zipjoong.user.domain;

import com.ssafy.zipjoong.board.domain.Board;
import com.ssafy.zipjoong.like.domain.CombinationLike;
import com.ssafy.zipjoong.like.domain.ProductLike;
import com.ssafy.zipjoong.recommand.model.Combination;
import com.ssafy.zipjoong.util.domain.EntityDate;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Table(name = "users")
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class User extends EntityDate {
    @Id
    private String userId;

    // 닉네임
    private String userNickname;

    // 프로필 이미지
    private String userImg;

    // 권한
    @Enumerated(EnumType.STRING)
    private UserRoleType userRole;

    // 삭제 여부
    private Boolean userIsDeleted;

    // 게시글 목록
    @OneToMany(mappedBy = "user")
    private List<Board> boards;

    // 조합 목록
    @OneToMany(mappedBy = "user")
    private List<Combination> combinations;

    // 좋아요한 제품 목록
    @OneToMany(mappedBy = "user")
    private List<ProductLike> productLikes;

    @OneToMany(mappedBy = "user")
    private List<CombinationLike> combinationLikes;

}