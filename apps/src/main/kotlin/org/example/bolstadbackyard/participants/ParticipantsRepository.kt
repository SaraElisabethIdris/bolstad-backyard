package org.example.bolstadbackyard.participants

import org.example.bolstadbackyard.participants.Participant
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface ParticipantRepository : JpaRepository<Participant, Long>