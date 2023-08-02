package com.example.manage_music.repository;

import com.example.manage_music.model.Music;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
public interface IMusicRepository extends JpaRepository<Music,Integer> {
    @Query(value = "select * from musics  where flag_delete=0",nativeQuery = true)
    Page<Music> findAllMusics(Pageable pageable);
    @Transactional
    @Modifying
    @Query(value = "insert into musics(flag_delete,name_music,name_sing,number_likes,release_date,id_status)" +
            "value(:#{#music.flagDelete},:#{#music.nameMusic},:#{#music.nameSing},:#{#music.numberLikes},:#{#music.releaseDate},:#{#music.status.idStatus}) ",nativeQuery = true)
    void saveMusic(@Param("music")Music music);
   @Query(value = "select * from musics where id=:id;",nativeQuery = true)
    Music findById(@Param("id")int id);
}
