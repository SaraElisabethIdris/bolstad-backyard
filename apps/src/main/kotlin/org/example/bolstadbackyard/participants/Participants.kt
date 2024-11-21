package org.example.bolstadbackyard.participants

import jakarta.persistence.*
import java.time.LocalDateTime

@Entity
@Table(name = "participants")
data class Participant(
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long = 0,

    @Column(nullable = false)
    val firstName: String,

    @Column(nullable = false)
    val lastName: String,

    @Column(nullable = false, unique = true)
    val email: String,

    @Column(nullable = true)
    val age: Int?,

    @Column(nullable = false)
    val registrationDate: LocalDateTime = LocalDateTime.now()
)