package org.example.bolstadbackyard.participants

import org.springframework.stereotype.Service

@Service
class ParticipantService(private val participantRepository: ParticipantRepository) {

    fun registerParticipant(participant: Participant): Participant {
        return participantRepository.save(participant)
    }

    fun getAllParticipants(): List<Participant> {
        return participantRepository.findAll()
    }
}