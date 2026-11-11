import type { Bi } from "@/i18n/LanguageProvider";

export interface QAItem {
  question: Bi;
  answer: Bi;
  code?: string;
  htmlAnswer?: boolean;
}

export const qaList: QAItem[] = [
  {
    question: { en: "What is Java?", fr: "Qu'est-ce que Java?" },
    answer:
      { en: "Java is a high-level, object-oriented programming language used to build platform-independent applications." +
      "<br/>It is widely used for web, mobile, and enterprise applications. Java code is compiled into bytecode, which runs on the Java Virtual Machine (JVM), allowing it to run on any device with a compatible JVM." +
      "<br/><br/>Java is known for its portability, robustness, and extensive libraries." +
      "<br/>It follows the principle of 'Write Once, Run Anywhere' (WORA). ",
        fr: "Java est un langage de programmation orienté objet de haut niveau qui sert à créer des applications indépendantes de la plateforme." +
        "<br/>Il est très utilisé pour le web, le mobile et les applications d'entreprise. Le code Java est compilé en bytecode, exécuté par la machine virtuelle Java (JVM), ce qui lui permet de tourner sur tout appareil qui a une JVM compatible." +
        "<br/><br/>Java est reconnu pour sa portabilité, sa robustesse et ses nombreuses bibliothèques." +
        "<br/>Il suit le principe « Write Once, Run Anywhere » (WORA). " },
    htmlAnswer: true,
  },
  {
    question: { en: "Difference between == and .equals() in Java?", fr: "Quelle est la différence entre == et .equals() en Java?" },
    answer:
      { en: "`==` compares reference (memory address), while `.equals()` compares the actual content if overridden properly.",
        fr: "`==` compare les références (adresses mémoire), alors que `.equals()` compare le contenu réel si la méthode est bien redéfinie." },
    code: `String a = new String("hello");
String b = new String("hello");

System.out.println(a == b);       // false
System.out.println(a.equals(b));  // true`,
  },
  {
    question: { en: "What is JVM?", fr: "Qu'est-ce que la JVM?" },
    answer:
      { en: "JVM (Java Virtual Machine) is an engine that provides a runtime environment to execute Java bytecode.",
        fr: "La JVM (Java Virtual Machine) est le moteur qui fournit l'environnement d'exécution du bytecode Java." },
  },
  {
    question: { en: "Why is the main method public and static in Java?", fr: "Pourquoi la méthode main est-elle public et static en Java?" },
    answer:
      { en: "The main method is public so that it can be called by the Java Virtual Machine (JVM) from outside the class. It is static so that it can be invoked without creating an instance of the class. This allows the JVM to call the main method directly to start the program.",
        fr: "La méthode main est public pour que la machine virtuelle Java (JVM) puisse l'appeler depuis l'extérieur de la classe. Elle est static pour pouvoir être appelée sans créer d'instance de la classe. La JVM peut ainsi l'appeler directement pour démarrer le programme." },
  },
  {
    question: { en: "Can we override the main method in Java?", fr: "Peut-on redéfinir (override) la méthode main en Java?" },
    answer:
      { en: "You can define another main() method in a subclass with the same signature, but that’s not overriding — it’s method hiding.<br/>" +
      "You can declare another main() in a subclass. But it doesn’t override the parent’s main() because main() is static.<br/><br/>" +
      "If you run java Parent → prints Parent main <br/>" +
      "If you run java Child → prints Child main <br/>" +
      "<b>In short:</b> You can hide the main method, but not override it.",
        fr: "On peut déclarer une autre méthode main() avec la même signature dans une sous-classe, mais ce n'est pas une redéfinition : c'est du masquage (method hiding).<br/>" +
        "La méthode main() de la sous-classe ne redéfinit pas celle du parent, parce que main() est static.<br/><br/>" +
        "Si on lance java Parent → affiche Parent main <br/>" +
        "Si on lance java Child → affiche Child main <br/>" +
        "<b>En bref :</b> on peut masquer la méthode main, mais pas la redéfinir." },
    htmlAnswer: true,
    code: `class Parent {
    public static void main(String[] args) {
        System.out.println("Parent main");
    }
}

class Child extends Parent {
    public static void main(String[] args) {
        System.out.println("Child main");
    }
}
`,
  },
  {
    question: { en: "Why should we not serialize data in a .txt file in Java?", fr: "Pourquoi ne pas sérialiser des données dans un fichier .txt en Java?" },
    answer:
      { en: "Don’t serialize data in a .txt file because Java serialization is binary, not readable, fragile to class changes, insecure if from untrusted sources, and not portable. Use JSON/XML for text files instead.",
        fr: "Il ne faut pas sérialiser des données dans un fichier .txt : la sérialisation Java est binaire, illisible, fragile aux changements de classe, dangereuse si la source n'est pas fiable et peu portable. Pour un fichier texte, utilise plutôt JSON ou XML." },
  },
  {
    question: { en: "What is transient keyword in Java?", fr: "À quoi sert le mot-clé transient en Java?" },
    htmlAnswer: true,
    answer:
      { en: "The transient keyword in Java is used to indicate that a field should not be serialized. When an object is serialized, transient fields are ignored and not included in the serialized representation. " +
      "This is useful for sensitive data or fields that can be derived and do not need to be persisted." +
      "<br/><br/> <b>Use case:</b> Sensitive data or temporary fields." +
      "<br/> Here, password won’t be saved during serialization.",
        fr: "Le mot-clé transient indique qu'un champ ne doit pas être sérialisé. Quand un objet est sérialisé, les champs transient sont ignorés. " +
        "C'est utile pour les données sensibles ou les champs qu'on peut recalculer et qui n'ont pas besoin d'être conservés." +
        "<br/><br/> <b>Cas d'usage :</b> données sensibles ou champs temporaires." +
        "<br/> Ici, le mot de passe ne sera pas enregistré pendant la sérialisation." },

    code: `class User implements Serializable {
    String name;
    transient String password; // won't be serialized
}
`,
  },
  {
    question: { en: "How does garbage collection work in Java?", fr: "Comment fonctionne le ramasse-miettes (garbage collector) en Java?" },
    htmlAnswer: true,
    answer:
      { en: "Java’s Garbage Collector automatically frees memory used by objects that are no longer reachable in the program, so you don’t have to manually manage memory." +
      "<br/><br/><b>How it works:</b><br/><br/>" +
      "<b>Mark phase</b> → GC identifies objects that are still reachable from root references (e.g., local variables, static fields).<br/>" +
      "<b>Sweep phase</b> → GC removes objects that aren't reachable.<br/>" +
      "<b>Compact phase (optional)</b> → GC defragments memory to avoid fragmentation.<br/>" +
      "<br/>You can’t force GC — calling System.gc() is just a suggestion to JVM.",
        fr: "Le ramasse-miettes de Java libère automatiquement la mémoire des objets qui ne sont plus accessibles dans le programme, donc pas besoin de gérer la mémoire à la main." +
        "<br/><br/><b>Fonctionnement :</b><br/><br/>" +
        "<b>Phase de marquage</b> → le GC repère les objets encore accessibles depuis les références racines (variables locales, champs static).<br/>" +
        "<b>Phase de nettoyage</b> → le GC supprime les objets inaccessibles.<br/>" +
        "<b>Phase de compactage (facultative)</b> → le GC défragmente la mémoire.<br/>" +
        "<br/>On ne peut pas forcer le GC : appeler System.gc() n'est qu'une suggestion faite à la JVM." },
  },
  {
    question: { en: "Do finalize have any role in Garbage Collection?", fr: "La méthode finalize() joue-t-elle un rôle dans le ramasse-miettes?" },
    htmlAnswer: true,
    answer:
      { en: "Yes, finalize() is called by the garbage collector before destroying an object, but it's deprecated and unreliable." +
      "<br/>Simple Example:",
        fr: "Oui, finalize() est appelée par le ramasse-miettes avant de détruire un objet, mais elle est dépréciée et peu fiable." +
        "<br/>Exemple simple :" },
    code: `class Resource {
    @Override
    protected void finalize() throws Throwable {
        System.out.println("finalize() called - cleaning up");
        super.finalize();
    }
}

public class Main {
    public static void main(String[] args) {
        Resource r = new Resource();
        r = null; // Make object eligible for GC
        System.gc(); // Request GC (not guaranteed to run)
        
        // finalize() may or may not be called
    }
}`,
  },
];
