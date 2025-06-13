import { Injectable } from "@angular/core";
import { INVENCOES } from "../mocks/invencao-mock";
import { Invencao } from "../models/invencao-model";

@Injectable({providedIn: 'root'})
export class InvencaoService {
    private invencoes = [...INVENCOES]

    getInvencoes(): Invencao[] {
        return this.invencoes;
    }

    addInvencao(invencao: Invencao) {
        invencao.id = this.invencoes.length + 1;
        this.invencoes.push(invencao);
    }

    getInvencaoById(id: number): Invencao | undefined {
        return this.invencoes.find(invencao => invencao.id === id);
    }
}