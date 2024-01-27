package com.gestionrh.gestionrhbackend.repositories;

import com.gestionrh.gestionrhbackend.entities.Postuler;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PostulerRepository extends JpaRepository<Postuler,Long> {
}
