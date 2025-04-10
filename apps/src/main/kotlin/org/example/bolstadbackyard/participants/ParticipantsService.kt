package org.example.bolstadbackyard.participants

import org.springframework.stereotype.Service
import org.springframework.dao.DataIntegrityViolationException
import org.slf4j.LoggerFactory

@Service
class ParticipantService(private val participantRepository: ParticipantRepository) {
    private val logger = LoggerFactory.getLogger(ParticipantService::class.java)

    fun registerParticipant(participant: Participant): Participant {
        try {
            val currentCount = participantRepository.count()
            participant.startNumber = (currentCount + 1).toInt()
            logger.info("Registering participant with startnummer: ${participant.startNumber}")
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