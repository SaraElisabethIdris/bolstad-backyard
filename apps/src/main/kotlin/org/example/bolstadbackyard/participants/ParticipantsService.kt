package org.example.bolstadbackyard.participants

import org.springframework.stereotype.Service
import org.springframework.dao.DataIntegrityViolationException

@Service
class ParticipantService(private val participantRepository: ParticipantRepository) {

    fun registerParticipant(participant: Participant): Participant {
        try {
            return participantRepository.save(participant)
        } catch (e: DataIntegrityViolationException) {
            throw IllegalArgumentException("A participant with this email already exists.")
        }
    }

    fun getAllParticipants(): List<Participant> {
        return participantRepository.findAll()
    }

    fun deleteParticipant(id: Long) {
        participantRepository.deleteById(id)
    }
}