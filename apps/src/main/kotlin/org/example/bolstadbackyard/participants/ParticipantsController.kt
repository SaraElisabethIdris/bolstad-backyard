package org.example.bolstadbackyard.participants

import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api")
class ParticipantController(private val participantService: ParticipantService) {

    @PostMapping("/participants")
    fun registerParticipant(@RequestBody participant: Participant): ResponseEntity<Any> {
        return try {
            val registeredParticipant = participantService.registerParticipant(participant)
            ResponseEntity(registeredParticipant, HttpStatus.CREATED)
        } catch (e: IllegalArgumentException) {
            ResponseEntity(mapOf("message" to e.message), HttpStatus.BAD_REQUEST)
        }
    }

    @GetMapping("/participants")
    fun getAllParticipants(): ResponseEntity<List<Participant>> {
        val participants = participantService.getAllParticipants()
        return ResponseEntity(participants, HttpStatus.OK)
    }

    @DeleteMapping("/participants/{id}")
    fun deleteParticipant(@PathVariable id: Long): ResponseEntity<Any> {
        participantService.deleteParticipant(id)
        return ResponseEntity(HttpStatus.NO_CONTENT)
    }
}