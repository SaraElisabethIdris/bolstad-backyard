package org.example.bolstadbackyard.participants

import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/participants")
class ParticipantController(private val participantService: ParticipantService) {

    @PostMapping("/register")
    fun registerParticipant(@RequestBody participant: Participant): ResponseEntity<Participant> {
        val registeredParticipant = participantService.registerParticipant(participant)
        return ResponseEntity(registeredParticipant, HttpStatus.CREATED)
    }

    @GetMapping
    fun getAllParticipants(): ResponseEntity<List<Participant>> {
        val participants = participantService.getAllParticipants()
        return ResponseEntity(participants, HttpStatus.OK)
    }
}