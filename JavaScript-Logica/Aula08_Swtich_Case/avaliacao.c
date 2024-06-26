#include <stdio.h>
#include <stdlib.h>
#include <time.h>

typedef struct {
    char letra;
    int numeros[2];
} SLN;

SLN** alocarMatriz(int ordem);
void liberarMatriz(SLN **matriz, int ordem);
void gerarMatriz(SLN **matriz, int ordem);
void imprimirOuGravarMatriz(SLN **matriz, int ordem, int opcao);
void transformarEmMatrizColuna(SLN **matriz, SLN **matrizColuna, int ordem);
void imprimirOuGravarMatrizColuna(SLN **matrizColuna, int ordem, int opcao);
void exibirMenu();

int main() {
    int ordem, opcao, continuar = 1;

    while (continuar) {
        printf("Digite a ordem da matriz: ");
        scanf("%d", &ordem);

        if (ordem <= 0) {
            printf("A ordem da matriz deve ser maior que 0.\n");
            continue;
        }

        SLN **mBD = alocarMatriz(ordem);
        gerarMatriz(mBD, ordem);

        exibirMenu();
        scanf("%d", &opcao);

        while (opcao < 1 || opcao > 2) {
            printf("Opcao invalida. Tente novamente.\n");
            exibirMenu();
            scanf("%d", &opcao);
        }

        imprimirOuGravarMatriz(mBD, ordem, opcao);

        SLN **mUD = alocarMatriz(ordem * ordem);
        transformarEmMatrizColuna(mBD, mUD, ordem);

        printf("\nOpcao para matriz coluna:\n1. Imprimir na tela\n2. Gravar em arquivo\nEscolha uma opcao: ");
        scanf("%d", &opcao);

        while (opcao < 1 || opcao > 2) {
            printf("Opcao invalida. Tente novamente.\n");
            printf("Escolha uma opcao para a matriz coluna: 1. Imprimir na tela 2. Gravar em arquivo\n");
            scanf("%d", &opcao);
        }

        imprimirOuGravarMatrizColuna(mUD, ordem, opcao);

        liberarMatriz(mBD, ordem);
        liberarMatriz(mUD, ordem * ordem);

        printf("\nDeseja continuar? 1. Sim 0. Nao\nEscolha: ");
        scanf("%d", &continuar);
    }

    return 0;
}

SLN** alocarMatriz(int ordem) {
    SLN **matriz = (SLN **)malloc(ordem * sizeof(SLN *));
    for (int i = 0; i < ordem; i++) {
        matriz[i] = (SLN *)malloc(ordem * sizeof(SLN));
    }
    return matriz;
}

void liberarMatriz(SLN **matriz, int ordem) {
    for (int i = 0; i < ordem; i++) {
        free(matriz[i]);
    }
    free(matriz);
}

void gerarMatriz(SLN **matriz, int ordem) {
    srand(time(NULL));
    for (int i = 0; i < ordem; i++) {
        for (int j = 0; j < ordem; j++) {
            matriz[i][j].letra = 'A' + (rand() % 26);
            matriz[i][j].numeros[0] = rand() % 10;
            matriz[i][j].numeros[1] = rand() % 10;
        }
    }
}

void imprimirOuGravarMatriz(SLN **matriz, int ordem, int opcao) {
    FILE *file = NULL;
    if (opcao == 2) {
        file = fopen("matriz.txt", "a");
        if (!file) {
            printf("Erro ao abrir o arquivo para escrita.\n");
            return;
        }
    }

    for (int i = 0; i < ordem; i++) {
        for (int j = 0; j < ordem; j++) {
            if (opcao == 1) {
                printf("%c [%d, %d] ", matriz[i][j].letra, matriz[i][j].numeros[0], matriz[i][j].numeros[1]);
            } else {
                fprintf(file, "%c [%d, %d] ", matriz[i][j].letra, matriz[i][j].numeros[0], matriz[i][j].numeros[1]);
            }
        }
        if (opcao == 1) {
            printf("\n");
        } else {
            fprintf(file, "\n");
        }
    }

    if (file) {
        fclose(file);
    }
}

void transformarEmMatrizColuna(SLN **matriz, SLN **matrizColuna, int ordem) {
    int index = 0;
    for (int i = 0; i < ordem; i++) {
        for (int j = 0; j < ordem; j++) {
            matrizColuna[index][0] = matriz[i][j];
            index++;
        }
    }
}

void imprimirOuGravarMatrizColuna(SLN **matrizColuna, int ordem, int opcao) {
    FILE *file = NULL;
    if (opcao == 2) {
        file = fopen("matriz.txt", "a");
        if (!file) {
            printf("Erro ao abrir o arquivo para escrita.\n");
            return;
        }
    }

    int tamanho = ordem * ordem;
    for (int i = 0; i < tamanho; i++) {
        if (opcao == 1) {
            printf("%c [%d, %d]\n", matrizColuna[i][0].letra, matrizColuna[i][0].numeros[0], matrizColuna[i][0].numeros[1]);
        } else {
            fprintf(file, "%c [%d, %d]\n", matrizColuna[i][0].letra, matrizColuna[i][0].numeros[0], matrizColuna[i][0].numeros[1]);
        }
    }

    if (file) {
        fclose(file);
    }
}

void exibirMenu() {
    printf("\nEscolha uma opcao:\n");
    printf("1. Imprimir na tela\n");
    printf("2. Gravar em arquivo\n");
    printf("Escolha: ");
}
